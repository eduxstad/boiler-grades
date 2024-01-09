<template>
    <v-container class="" v-bind:class="{'white': !$vuetify.theme.dark, 'black': $vuetify.theme.dark}">
    <v-container>
        <v-row>
            <v-col>
                {{data.course_desc}} 
            </v-col>
            <v-col cols='auto'>
                Instructor: {{data.instructor}} 
            </v-col>
            <v-col class="justify-end">
                <div class="d-flex justify-end">
                GPA: {{data.gpa.toFixed(2)}} 
                </div>
            </v-col>
        </v-row>
    </v-container>
    <v-simple-table dense>
        <template v-slot:default>
            <thead>
                <tr>
                    <th v-for="(header, index) in tableHeaders" 
                        v-bind:key="index" 
                        class="text-center">
                        {{header}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td v-for="(data, index) in tableData" 
                        v-bind:key="index"
                        class="text-center">
                        {{data.toFixed(1)}}%
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
    </v-container>
</template>

<script>
export default {
    name: "GradeTable",
    props: ['data'],
    data: () => ({
        tableData: [],
        tableHeaders: [],
    }),
    created() {
        let grades=['a_plus', 'a', 'a_minus', 'b_plus', 'b', 'b_minus',
                    'c_plus', 'c', 'c_minus', 'd_plus', 'd', 'd_minus',
                    'f'];

        for (const grade of grades) {
            if (this.data[grade] != 0) {
                this.tableData.push(this.data[grade]);
                this.tableHeaders.push(this.gradeLabels(grade));
            }
        }
        
    },
    methods: {
        gradeLabels(grade) {
            switch (grade) {
                case 'a_plus':
                    return "A+";
                case 'a':
                    return "A";
                case 'a_minus':
                    return "A-";
                case 'b_plus':
                    return "B+";
                case 'b':
                    return "B";
                case 'b_minus':
                    return "B-";
                case 'c_plus':
                    return "C+";
                case 'c':
                    return "C";
                case 'c_minus':
                    return "C-";
                case 'd_plus':
                    return "D+";
                case 'd':
                    return "D";
                case 'd_minus':
                    return "D-";
                default:
                    return "F";
            }
        }
    }
}
</script>