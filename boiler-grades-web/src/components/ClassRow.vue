<template>
    <v-hover v-slot="{ hover }">
    <v-container class="text-body-2 pa-0" v-bind:class="{'grey lighten-3': hover && !$vuetify.theme.dark, 'grey darken-4': hover && $vuetify.theme.dark}">
        <v-row no-gutters class="align-center px-1" v-bind:class="{ 'font-weight-bold': allSections }">
            <v-col cols='4' sm='3' md='2'>
                {{ classrowdata.label }}
            </v-col>
            <v-col cols='1' class="d-none d-md-flex justify-end">
                {{ classrowdata.count }} 
            </v-col>
            <v-col cols='7' sm='8' md='7' ref="svgDiv">
                <v-menu
                    v-model="showPopover"
                    open-on-hover
                    open-delay='250'
                    top
                    offset-y
                    z-index="100000"
                    nudge-top="20"
                >
                <template v-slot:activator="{on, attrs}">
                <div 
                    v-bind:id="classrowdata.id.replace(/\W/g, '')" 
                    ref="svgGraph"
                    v-on="on"
                    v-bind="attrs"
                    v-bind:style="{color: $vuetify.theme.dark ? 'rgb(224, 224, 224, 0.8)' : 'rgba(108, 108, 108, 0.8)'}"
                >
                </div>
                </template>
                    <GradeTable 
                    v-bind:data="classrowdata"/>
                </v-menu>
            </v-col>
            <v-col cols='1' class="d-none d-md-flex justify-end">
                {{ classrowdata.gpad.toFixed(2) }}
            </v-col>
            <v-col cols='1' md='1' class="d-flex justify-end">
                {{ classrowdata.gpa.toFixed(2) }}
            </v-col>
     </v-row>
    </v-container>
    </v-hover>
</template>

<script>
import * as d3 from "d3";
import GradeTable from './GradeTable';
export default {
    name: 'ClassRow',
    props: ['classrowdata'],
    data: () => ({
        graphId: null,
        min: null,
        bot90: null,
        bot75: null,
        bot50: null,
        top50: null,
        top75: null,
        top90: null,
        max: null,
        allSections: false,
        showPopover: false,
    }),
    beforeMount() {
        this.calculateDist();
        this.graphId = "#" + this.classrowdata.id.replace(/\W/g, '');
        this.allSections = (this.classrowdata.label == 'All Sections');
    },
    mounted() {
        this.generateGraph();
        window.addEventListener('resize', this.generateGraph);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.generateGraph);
    },
    methods: {
        generateGraph() {
            d3.select(this.graphId).html("");
            const xpadding = 20;
            const height = 25;
            const yoffset = 5;
            const graphheight = 20;
            //is this referencing the right element? idk but it shouldn't matter
            //since they are all the same width
            const width = this.$refs.svgDiv.clientWidth - 2*xpadding;
            let svg = d3.select(this.graphId)
                            .append("svg")
                            .attr("width", width + 2*xpadding)
                            .attr("height", height);
            let gpaScale = d3.scaleLinear()
                            .domain([0,4])
                            .range([xpadding, width+xpadding]);

            var colorScale = d3.scaleLinear()
                     .domain([ 1, -1])
                     .range([180, 360]);

            let classrowdata = this.classrowdata;

            var drawGPABox = function(low, high, a, classrowdata) {
                svg.append("rect")
                .attr("rx", 8)
                .attr("ry", 8)
                .attr("x", function () {
                    return gpaScale(low) - 5;
                })
                .attr("y", yoffset)
                .attr("width", function () {
                    return gpaScale(high) - gpaScale(low) + 10;
                })
                .attr("height", graphheight)
                .attr("fill", function () {
                    var h = colorScale(classrowdata.gpad);
                    return "hsla(" + h + ", 100%, 76%, " + a + ")";
                })
                ;
            };

            drawGPABox(this.min, this.max, 0.2, classrowdata);
            drawGPABox(this.bot90, this.top90, 0.2, classrowdata);
            drawGPABox(this.bot75, this.top75, 0.2, classrowdata);
            drawGPABox(this.bot50, this.top50, 0.6, classrowdata);

            svg.append("rect")
                .attr("x", function () {
                    return gpaScale(classrowdata.gpa) - 1;
                })
                .attr("y", yoffset)
                .attr("width", 3)
                .attr("height", graphheight)
                .attr("fill", "currentColor");
                           
        },
        findGPA(gpa) {
            switch (gpa) {
                case 0:
                    return 0;
                case 1:
                    return 0.7;
                case 2: 
                    return 1;
                case 3:
                    return 1.3;
                case 4:
                    return 1.7;
                case 5:
                    return 2;
                case 6:
                    return 2.3;
                case 7:
                    return 2.7;
                case 8:
                    return 3;
                case 9:
                    return 3.3;
                case 10:
                    return 3.7;
                case 11:
                    return 4;
                case 12:
                    return 4;
            } 
        },
        calculateDist() {
            let data = this.classrowdata;
            let a_plus = (data.a_plus) || 0;
            let a = (data.a) || 0;
            let a_minus = (data.a_minus) || 0;
            let b_plus = (data.b_plus) || 0;
            let b = (data.b) || 0;
            let b_minus = (data.b_minus) || 0;
            let c_plus = (data.c_plus) || 0;
            let c = (data.c) || 0;
            let c_minus = (data.c_minus) || 0;
            let d_plus = (data.d_plus) || 0;
            let d = (data.d) || 0;
            let d_minus = (data.d_minus) || 0;
            let f = (data.f) || 0;
            let total = a+a_plus+a_minus+b_plus+b+b_minus
                        +c_plus+c+c_minus+d_plus+d+d_minus
                        +f;

            let grades = [f, d_minus, d, d_plus, c_minus, c, c_plus, 
                            b_minus, b, b_plus, a_minus, a, a_plus];
            for (let index = 1; index < grades.length; index++) {
                grades[index] = grades[index] + grades[index-1];
            }
            for (let index = 0; index < grades.length; index++) {
                let sum = grades[index];
                if (sum/total >= 0.99 && this.max == null) {
                    this.max = this.findGPA(index);
                } if (sum/total >= 0.95 && this.top90 == null) {
                    this.top90 = this.findGPA(index);
                } if (sum/total >= 0.875 && this.top75 == null) {
                    this.top75 = this.findGPA(index);
                } if (sum/total >= 0.75 && this.top50 == null) {
                    this.top50 = this.findGPA(index);
                } if (sum/total >= 0.25 && this.bot50 == null) {
                    this.bot50 = this.findGPA(index);
                } if (sum/total >= 0.125 && this.bot75 == null) {
                    this.bot75 = this.findGPA(index);
                } if (sum/total >= 0.05 && this.bot90 == null) {
                    this.bot90 = this.findGPA(index);
                } if (sum/total > 0 && this.min == null) {
                    this.min = this.findGPA(index);
                }
            }
            
            /*console.log("top90: " + this.top90);
            console.log("top75: " + this.top75);
            console.log("top50: " + this.top50);
            console.log("bot50: " + this.bot50);
            console.log("bot75: " + this.bot75);
            console.log("bot90: " + this.bot90);
            console.log("min: " + this.min);
            console.log("max: " + this.max);*/
        }
    },
    components: {
        GradeTable,
    },
}
</script>

<style scoped>
</style>