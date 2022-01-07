<template>
    <v-card elevation="3">
    <v-container>
        <v-row no-gutters>
            <v-col cols='12' sm='6'>
                <h4> Color Scale </h4>
                <p> Bluer hues indicate a higher than average GPA while redder hues indicate a lower than average GPA.</p>
                <v-container>
                    <v-row no-gutters>
                        <v-col>
                            +1.0
                        </v-col>
                        <v-col class="d-flex justify-center">
                            +0.25
                        </v-col>
                        <v-col class="d-flex justify-center">
                            -0.25
                        </v-col>
                        <v-col class="d-flex justify-end">
                            -1.0
                        </v-col>
                    </v-row>
                    <v-row no-gutters ref="gpaColorScale">
                        <div id="gpaColorScale" ></div>
                    </v-row>
                </v-container>
            </v-col>
            <v-col cols='12' sm='6'>
                <h4> Percentile Scale </h4>
                <p> The shading shows the distribution of grades with darker shades being closer to the median. </p>
                <v-container>
                    <v-row no-gutters>
                        <v-col>
                            100%
                        </v-col>
                        <v-col>
                            95%
                        </v-col>
                        <v-col>
                            75%
                        </v-col>
                        <v-col>
                            50%
                        </v-col>
                    </v-row>
                    <v-row no-gutters ref="gpaPercentileScale">
                        <div id="gpaPercentileScale" ></div>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
    </v-card>
</template>

<script>
import * as d3 from "d3";
export default {
    name: 'Legend',
    setup() {
    },
    mounted() {
        this.generateLegend();
        window.addEventListener('resize', this.generateLegend);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.generateLegend);
    },
    methods: {
        generateLegend() {
            d3.select("#gpaColorScale").html("");
            const xpadding = 0;
            const height = 25;
            const yoffset = 5;
            const graphheight = 20;

            const width = this.$refs.gpaColorScale.clientWidth - 2*xpadding;
            let svg = d3.select("#gpaColorScale")
                        .append("svg")
                        .attr("width", width + 2*xpadding)
                        .attr("height", height);

            let lg = svg.append("defs").append("linearGradient")
                .attr("id", "gradient")
                .attr("x1", "0%")
                .attr("x2", "100%")
                .attr("y1", "0%")
                .attr("y2", "0%");
            lg.append("stop")
                .attr("offset", "0%")
                .style("stop-color", "hsla(180, 100%, 76%, 1)")
                .style("stop-opacity", 1);
            lg.append("stop")
                .attr("offset", "50%")
                .style("stop-color", "hsla(270, 100%, 76%, 1)")
                .style("stop-opacity", 1);
            lg.append("stop")
                .attr("offset", "100%")
                .style("stop-color", "hsla(359, 100%, 76%, 1)")
                .style("stop-opacity", 1);
            
            svg.append("rect")
                .attr("rx", 8)
                .attr("ry", 8)
                .attr("x", xpadding)
                .attr("y", yoffset)
                .attr("width", width)
                .attr("height", graphheight)
                .style("fill", "url(#gradient)");

            this.generatePercentile();
        },
        generatePercentile() {
            d3.select("#gpaPercentileScale").html("");
            const xpadding = 0;
            const height = 25;
            const yoffset = 5;
            const graphheight = 20;

            const width = this.$refs.gpaPercentileScale.clientWidth - 2*xpadding;
            let svg = d3.select("#gpaPercentileScale")
                        .append("svg")
                        .attr("width", width + 2*xpadding)
                        .attr("height", height);

            var drawGPABox = function(low, a) {
                svg.append("rect")
                .attr("rx", 8)
                .attr("ry", 8)
                .attr("x", xpadding + low*width)
                .attr("y", yoffset)
                .attr("width", function () {
                    return width - low*width;
                })
                .attr("height", graphheight)
                .attr("fill",  "hsla(270, 100%, 76%, " + a + ")")
                ;
            };

            drawGPABox(0, 0.2);
            drawGPABox(0.25, 0.2);
            drawGPABox(0.5, 0.2);
            drawGPABox(0.75, 0.6);
        },
    }
}
</script>