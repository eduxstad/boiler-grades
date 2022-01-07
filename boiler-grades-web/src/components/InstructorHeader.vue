<template>
    <v-container class="pa-0">
        <v-row no-gutters class="align-center text-decoration-underline px-1">
            <v-col cols='4' sm='3' md='2'>
                <div class="font-weight-light">{{sectionlabel}}</div> 
            </v-col>
            <v-col cols='1' class="d-none d-md-flex justify-end">
                <div class="font-weight-light">Sections</div>
            </v-col>
            <v-col cols='7' sm='8' md='7'>
                <div id="instructorheadersvg" ref="svgAxis">
                </div>
            </v-col>
            <v-col cols='1' class="d-none d-md-flex justify-end">
                <div class="font-weight-light">GPA Δ</div>
            </v-col>
            <v-col cols='1' md='1' class="d-flex justify-end">
                <div class="font-weight-light">GPA</div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import * as d3 from "d3";
export default {
    name: 'InstructorHeader',
    props: ['sectionlabel'],
    setup() {
    },
    mounted() {
        this.generateAxis();
        window.addEventListener('resize', this.generateAxis);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.generateAxis);
    },
    methods: {
        generateAxis() {
            //delete any previous axis
            d3.select("#instructorheadersvg").html("").attr("ref", "svgAxis");
            const xpadding= 20;
            const height = 30;
            const width = this.$refs.svgAxis.clientWidth - 2*xpadding;
            
            

            const svg = d3.select("#instructorheadersvg")
                        .append("svg")
                        .attr("width", width + 2*xpadding)
                        .attr("height", height);

            let gpaScale = d3.scaleLinear()
                            .domain([0,4])
                            .range([xpadding, width+xpadding]);

            let gpaAxis = d3.axisTop(gpaScale)
                            .tickValues([0, 1, 2, 3, 4]);

            svg.append("g")
                .attr("class", "axis")
                .style("font-size", "13px")
                .style("font-family", "Roboto")
                .attr("transform", "translate(" + 0 + ", " + (height-1).toString() + ")")
                .call(gpaAxis);

        },
    }
}
</script>