<template>
<v-container class="">
    <v-autocomplete
        solo
        auto-select-first
        clearable
        hide-no-data
        v-model="select"
        :loading="loading"
        :items="items"
        :filter="filter"
        :search-input.sync="search"
        label="Search by class or instructor"
        class="mb-n4"
    >
    </v-autocomplete>
    <v-btn-toggle color="primary" >
    <v-btn class="mx-4"  @click="clickedShowLegend" >
        Legend
    </v-btn>
    </v-btn-toggle>
    <v-tooltip bottom open-delay='500'>
        <template v-slot:activator="{ on, attrs }">
            <div id="test" class="d-inline-block" v-bind="attrs" v-on="on">
                <v-checkbox v-bind="attrs" v-on="on"
                v-model="includePandemic"
                :label="`Include pandemic semesters`"
                class="pt-0 pl-2"
                ></v-checkbox>
        </div>
        </template>
        <span>Include sections from Spring 2020, Summer 2020, Fall 2020, and Spring 2021</span>
    </v-tooltip>
    <v-tooltip bottom open-delay='500'>
        <template v-slot:activator="{ on, attrs }">
            <div id="test2" class="d-inline-block" v-bind="attrs" v-on="on">
                <v-checkbox v-bind="attrs" v-on="on"
                v-model="includeHonors"
                :label="`Include honors sections`"
                class="pt-0 pl-2"
                ></v-checkbox>
        </div>
        </template>
        <span>Honors sections are generally small and can skew the GPA</span>
    </v-tooltip>
    <Legend v-if="showLegend" class="ma-2"/> 
    <InstructorHeader v-if="classRows.length > 0" v-bind:sectionlabel="sectionlabel"/>
    <ClassRow v-for="row in classRows" :key="row.label" v-bind:classrowdata="row"/>
    <v-container v-if="classRows.length == 0 && !isLoading" class="font-weight-light px-auto pt-8">
        <v-row class="justify-center">
        No results found. Try searching 'MA16100' or 'Peroulis'
        </v-row>
    </v-container>
    <v-layout justify-center>
    <v-progress-circular
        class="pt-8"
        v-if="isLoading"
        :size="70"
        :width="7"
        color="light-blue"
        indeterminate
    ></v-progress-circular>
    </v-layout>
</v-container>
</template>

<script>
import ClassRow from './ClassRow';
import InstructorHeader from './InstructorHeader';
import Legend from './Legend';
export default {
    name: 'SearchBar',
    setup () {
    },
    data: () => ({
            hasSaved: false,
            isEditing: null,
            isLoading: false,
            model: null,
            search: null,
            loading: null,
            select: null,
            items: [],
            sections: [],
            classRows: [],
            sectionlabel: null,
            includePandemic: true,
            includeHonors: false,
            legendLabel: 'Show Legend',
            showLegend: false,
    }),

    created() {
        this.getItems();
    },
    
    methods: {
        filter(item, queryText, itemText) {
            itemText = itemText.replace(",", "").replace(".", "");
            queryText = queryText.replace(",", "").replace(".", "");
            //remove spaces if first two characters are capital (probably a course number) 
            if (queryText.charCodeAt(0) >= 65 && queryText.charCodeAt(0) <= 90 
                && queryText.charCodeAt(1) >= 65 && queryText.charCodeAt(1) <= 90) 
            {
                itemText = itemText.replace(/\s/g, '');
                queryText = queryText.replace(/\s/g, '');
            }
            if (itemText.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1 ) {
                return true;
            }
        },
        getItems() {
            fetch('/api/indexes')
                .then(res => res.json())
                .then(res => {
                    this.items = res;
                })
                .catch(err => {
                    console.log(err)
                })
        },
        clickedShowLegend() {
            if (this.showLegend) {
                this.showLegend = false;
            } else {
                this.showLegend = true;
            }
            if(this.legendLabel == 'Show Legend') {
                this.legendLabel = 'Hide Legend'
            } else {
                this.legendLabel = 'Show Legend'
            }
        },
        sectionGPA(section) {
            let a_plus = parseFloat(section.a_plus) || 0;
            let a = parseFloat(section.a) || 0;
            let a_minus = parseFloat(section.a_minus) || 0;
            let b_plus = parseFloat(section.b_plus) || 0;
            let b = parseFloat(section.b) || 0;
            let b_minus = parseFloat(section.b_minus) || 0;
            let c_plus = parseFloat(section.c_plus) || 0;
            let c = parseFloat(section.c) || 0;
            let c_minus = parseFloat(section.c_minus) || 0;
            let d_plus = parseFloat(section.d_plus) || 0;
            let d = parseFloat(section.d) || 0;
            let d_minus = parseFloat(section.d_minus) || 0;
            let e = parseFloat(section.e) || 0;
            let f = parseFloat(section.f) || 0;
            let i_f = parseFloat(section.i_f) || 0;

            let total = (a+a_plus+a_minus+b_plus+b+b_minus+c+c_plus+c_minus
                  +d_plus+d+d_minus+e+f+i_f);

            if (total == 0) {
                return 0;
            }

            let gpa = 
                ((a+a_plus)*4
                +a_minus*3.7
                +b_plus*3.3
                +b*3
                +b_minus*2.7
                +c_plus*2.3
                +c*2
                +c_minus*1.7
                +d_plus*1.3
                +d*1
                +d_minus*0.7)
                /total;
            return gpa;
        },
        newAverage(average, count, number) {
            return (average * count + number)/(count + 1);
        },
        calculateSections(instructor) {
            let classes = {};
            classes['all'] = { label: 'All Sections',
                                course_desc: 'All',
                                instructor: 'All',
                                count: 0,
                                a_plus: 0,
                                a: 0,
                                a_minus: 0,
                                b_plus: 0,
                                b: 0,
                                b_minus: 0,
                                c_plus: 0,
                                c: 0,
                                c_minus: 0,
                                d_plus: 0,
                                d: 0,
                                d_minus: 0,
                                f: 0,
                                gpad: 0,
                                gpa: 0,};
            for (const section of this.sections) {
                if ([202020, 202030, 202110, 2020120].includes(section.academic_period) && !this.includePandemic) {
                    //ignore section if it's a pandemic semester
                    continue;
                }
                if (section.title.includes('Honors') && !this.includeHonors) {
                    continue;
                }
                //check if gpa is zero (don't add if so)
                if (this.sectionGPA(section) == 0) { continue; }
                //add to all
                let count = classes['all'].count;
                classes['all'].a_plus = this.newAverage(classes['all'].a_plus, count, (parseFloat(section.a_plus) || 0));
                classes['all'].a = this.newAverage(classes['all'].a, count, (parseFloat(section.a) || 0));
                classes['all'].a_minus = this.newAverage(classes['all'].a_minus, count, (parseFloat(section.a_minus) || 0));
                classes['all'].b_plus = this.newAverage(classes['all'].b_plus, count, (parseFloat(section.b_plus) || 0));
                classes['all'].b = this.newAverage(classes['all'].b, count, (parseFloat(section.b) || 0));
                classes['all'].b_minus = this.newAverage(classes['all'].b_plus, count, (parseFloat(section.b_minus) || 0));
                classes['all'].c_plus = this.newAverage(classes['all'].c_plus, count, (parseFloat(section.c_plus) || 0));
                classes['all'].c = this.newAverage(classes['all'].c, count, (parseFloat(section.c) || 0));
                classes['all'].c_minus = this.newAverage(classes['all'].c_minus, count, (parseFloat(section.c_minus) || 0));
                classes['all'].d_plus = this.newAverage(classes['all'].d_plus, count, (parseFloat(section.d_plus) || 0));
                classes['all'].d = this.newAverage(classes['all'].d, count, (parseFloat(section.d) || 0));
                classes['all'].d_minus = this.newAverage(classes['all'].d_minus, count, (parseFloat(section.d_minus) || 0));
                classes['all'].f = this.newAverage(classes['all'].f, count, ((parseFloat(section.f) || 0) 
                                                                        + (parseFloat(section.e) || 0) 
                                                                        + (parseFloat(section.i_f) || 0)));
                classes['all'].gpa = this.newAverage(classes['all'].gpa, count, this.sectionGPA(section));
                classes['all'].count += 1;
                let id;
                let label;
                if (instructor) {
                    //add to course of instructor
                    id = section.subject + section.course_num.toString() + section.title;
                    if (section.title.includes('Honors')) {
                        label = section.subject + " " + section.course_num.toString() + ' (Honors)';
                    } else {
                        label = section.subject + " " + section.course_num.toString();
                      }
                    classes['all'].instructor = section.instructor;
                } else {
                    //add to specific instructor
                    classes['all'].course_desc = section.title;
                    id = section.instructor + section.title;
                    if (section.title.includes('Honors')) {
                        label = section.instructor + ' (Honors)';
                    } else {
                        label = section.instructor;
                    }
                }
                if(!(id in classes)) { //new id
                    classes[id] = { 
                                label: label,
                                course_desc: section.title,
                                instructor: section.instructor,
                                count: 1,
                                a_plus: (parseFloat(section.a_plus) || 0),
                                a: (parseFloat(section.a) || 0),
                                a_minus: (parseFloat(section.a_minus) || 0),
                                b_plus: (parseFloat(section.b_plus) || 0),
                                b: (parseFloat(section.b) || 0),
                                b_minus: (parseFloat(section.b_minus) || 0),
                                c_plus: (parseFloat(section.c_plus) || 0),
                                c: (parseFloat(section.c) || 0),
                                c_minus: (parseFloat(section.c_minus) || 0),
                                d_plus: (parseFloat(section.d_plus) || 0),
                                d: (parseFloat(section.d) || 0),
                                d_minus: (parseFloat(section.d_minus) || 0),
                                f: (parseFloat(section.f) || 0)
                                    + (parseFloat(section.e) || 0)
                                    + (parseFloat(section.i_f) || 0),
                                gpad: 0,
                                gpa: this.sectionGPA(section),
                    } ;        
                } else { //add to id 
                    let count = classes[id].count;
                    classes[id].a_plus = this.newAverage(classes[id].a_plus, count, (parseFloat(section.a_plus) || 0));
                    classes[id].a = this.newAverage(classes[id].a, count, (parseFloat(section.a) || 0));
                    classes[id].a_minus = this.newAverage(classes[id].a_minus, count, (parseFloat(section.a_minus) || 0));
                    classes[id].b_plus = this.newAverage(classes[id].b_plus, count, (parseFloat(section.b_plus) || 0));
                    classes[id].b = this.newAverage(classes[id].b, count, (parseFloat(section.b) || 0));
                    classes[id].b_minus = this.newAverage(classes[id].b_plus, count, (parseFloat(section.b_minus) || 0));
                    classes[id].c_plus = this.newAverage(classes[id].c_plus, count, (parseFloat(section.c_plus) || 0));
                    classes[id].c = this.newAverage(classes[id].c, count, (parseFloat(section.c) || 0));
                    classes[id].c_minus = this.newAverage(classes[id].c_minus, count, (parseFloat(section.c_minus) || 0));
                    classes[id].d_plus = this.newAverage(classes[id].d_plus, count, (parseFloat(section.d_plus) || 0));
                    classes[id].d = this.newAverage(classes[id].d, count, (parseFloat(section.d) || 0));
                    classes[id].d_minus = this.newAverage(classes[id].d_minus, count, (parseFloat(section.d_minus) || 0));
                    classes[id].f = this.newAverage(classes[id].f, count, ((parseFloat(section.f) || 0) 
                                                                        + (parseFloat(section.e) || 0) 
                                                                        + (parseFloat(section.i_f) || 0)));
                    classes[id].gpa = this.newAverage(classes[id].gpa, count, this.sectionGPA(section));
                    classes[id].count += 1;
                }
            }
            //add them all to class rows    
            let gpaAverage = classes['all'].gpa;
            for (const [key, value] of Object.entries(classes)) {
                if (key == 'all') {
                    this.classRows.push(value);
                } else { //calculate diff
                    value.gpad = value.gpa - gpaAverage; 
                    this.classRows.push(value);
                }
            }
            this.classRows.sort(this.classSort);
            if (this.classRows.length == 2) {
                //remove redundant first element 'all sections'
                this.classRows.shift();
            }
            if (this.classRows[0].gpa == 0) {
                //gpa could not be calculated, just return no results
                //likely because the class is all pass/fail
                this.classRows = [];
            }
        },
        classSort (a,b) {
            //don't sort the first section
            if (a.label == 'All Sections' || b.label == 'All Sections') return 0; 
            if (a.gpa < b.gpa) {
                return 1;
            }
            if (a.gpa > b.gpa) {
                return -1;
            }
            return 0;
        },
        updateSections (val){
            this.sections= [];
            this.classRows = [];
            this.isLoading = true;
            if (/[A-Z]{2,4}\d{5}/.exec(val)) {
                const [subject, course_number] = val.split(/([A-Z]{2,4})(\d{5})/)
                                            .filter(r => r !== '');
                fetch('/api/grades?course=' + subject 
                            + ' ' + course_number)
                    .then(res => res.json())
                    .then(res => {
                        //console.log(JSON.stringify(res));
                        this.sections = res;
                        this.isLoading = false;
                        this.calculateSections(false);
                        this.sectionlabel = 'Instructors'
                    })
                    .catch(err => {
                        console.log(err)
                    })
            } else {
                fetch('/api/grades?instructor=' + val)
                    .then(res => res.json())
                    .then(res => {
                        //console.log(JSON.stringify(res));
                        this.sections = res;
                        this.isLoading = false;
                        this.calculateSections(true);
                        this.sectionlabel = 'Classes'
                        
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        },
    },

    watch: {
        search (val) {
            if (val == null) {
                //clear results
                this.sections = [];
                this.classRows = [];
            }
            if (!val | !this.items.includes(val)) {
                return;
            }
            
            this.updateSections(val); 
            //this.getEntryDebounced()
        },
        includePandemic() {
           this.updateSections(this.search); 
        },
        includeHonors() {
            this.updateSections(this.search);
        }
    },
    
    components: {
        ClassRow,
        InstructorHeader,
        Legend,
    },
}
</script>
