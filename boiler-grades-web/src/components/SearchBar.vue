<template>
<v-container>
    <v-autocomplete
        solo
        auto-select-first
        clearable
        hide-no-data
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        label="Search by class or instructor"
    >
    </v-autocomplete>
    <v-container class="grey lighten-5">
        <v-row v-for="section in sections" :key="section.id">
            {{section.subject }}{{ section.course_num }}
        </v-row>
    </v-container>
</v-container>
</template>

<script>
export default {
    name: 'SearchBar',
    setup () {
        console.log("I'm setting it up rn");
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
    }),

    created() {
        this.getItems();
    },
    
    methods: {
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
        getEntryDebounced() {
            clearTimeout(this._timerId)

            this._timerId = setTimeout(() => {
                if (this.items.includes(this.search)) {
                    //do something
                    //console.log(this.search)
                }
            }, 500)
        }
    },

    watch: {
        search (val) {
            if (!val | !this.items.includes(val)) {
                return;
            }
            if (/[A-Z]{2,4}\d{5}/.exec(val)) {
                const [subject, course_number] = val.split(/([A-Z]{2,4})(\d{5})/)
                                            .filter(r => r !== '');
                fetch('/api/grades?course=' + subject 
                            + ' ' + course_number)
                    .then(res => res.json())
                    .then(res => {
                        //console.log(JSON.stringify(res));
                        this.sections = res;
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
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            //this.getEntryDebounced()
        }
    },
}
</script>