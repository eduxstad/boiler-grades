(function(t){function e(e){for(var s,l,i=e[0],o=e[1],c=e[2],d=0,p=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&p.push(n[l][0]),n[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},n={app:0},r=[];function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0423":function(t,e,a){"use strict";a("9759")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("Header"),a("v-container",[a("v-row",{staticClass:"justify-center"},[a("v-col",{staticClass:"content",attrs:{sm:"12",md:"12",lg:"12",xl:"8"}},[a("SearchBar"),a("v-alert",{staticClass:"mx-8 mt-16",attrs:{type:"warning","colored-border":"",elevation:"1",border:"left"}},[t._v(" Warning: Correlation is not causation. Historical averages may not predict future grades. Speak to an advisor before making academically impactful decisions. ")]),a("v-container",{staticClass:"mt-8"},[a("h2",[t._v("Data")]),a("p",[t._v(" This website uses data provided by Purdue through a "),a("a",{attrs:{target:"_blank",href:"https://www.purdue.edu/legalcounsel/public/index.html"}},[t._v("Public Records")]),t._v(" request. You can access the raw data "),a("a",{attrs:{target:"_blank",href:"https://purdue0-my.sharepoint.com/:x:/g/personal/eduxstad_purdue_edu/EdC_vaVTb5RBo3zM-guzJjEBYpku8Qz6sRWyAjFwKvcYEw?e=X9nPrA"}},[t._v(" online")]),t._v(" or via "),a("a",{attrs:{target:"_blank",href:"https://github.com/eduxstad/boiler-grades/raw/main/grades.xlsx"}},[t._v(" download (9 MB)")]),t._v(" . It contains data from all courses at the West Lafayette campus with more than 10 students from Summer 2016 to Fall 2021. Some courses may not be shown if they only assigned non-weighted grades (such as pass/fail). ")]),a("h2",[t._v("Attribution")]),a("p",[t._v(" This website was inspired by the team at "),a("a",{attrs:{target:"_blank",href:"https://gophergrades.com"}},[t._v(" GopherGrades")]),t._v(" (from the University of Minnesota), the team lead by "),a("a",{attrs:{target:"_blank",href:"https://waf.cs.illinois.edu/discovery/grade_disparity_between_sections_at_uiuc/"}},[t._v(" Wade Fagen-Ulmschneider")]),t._v(" (from the University of Illinois), and "),a("a",{attrs:{target:"_blank",href:"https://austingwalters.com/foia-requesting-100-universities/"}},[t._v(" Austin G. Walters")]),t._v(". Fall 2021 and Spring 2022 data was provided by Joey Diesen. ")]),a("h2",[t._v("Code")]),a("p",[t._v("This website is open source. If you'd like to report or fix a bug, suggest an improvement or update the dataset please visit the "),a("a",{attrs:{target:"_blank",href:"https://github.com/eduxstad/boiler-grades"}},[t._v(" GitHub repository")]),t._v(". ")]),a("p",[t._v("Built with 🚂🔨 by "),a("a",{attrs:{target:"_blank",href:"https://github.com/eduxstad"}},[t._v("eduxstad")]),t._v(".")])])],1)],1)],1),t.dev?a("v-container",[a("p",{staticClass:"d-flex d-sm-none"},[t._v("Xtra-Small")]),a("p",{staticClass:"d-none d-sm-flex d-md-none"},[t._v("Small")]),a("p",{staticClass:"d-none d-md-flex d-lg-none"},[t._v("Medium")]),a("p",{staticClass:"d-none d-lg-flex d-xl-none"},[t._v("Large")]),a("p",{staticClass:"d-none d-xl-flex"},[t._v("Xtra-Large")])]):t._e()],1)],1)},r=[],l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"headerdiv"},[a("div",{staticClass:"imagefilter"},[a("h1",{staticClass:"text-center pagetitle"},[t._v("Boiler Grades")]),a("h3",{staticClass:"text-center"},[t._v(" View the average GPA of professors and courses at Purdue ")])])])}],o={name:"Header",setup:function(){}},c=o,u=(a("0423"),a("2877")),d=Object(u["a"])(c,l,i,!1,null,"2e1ca500",null),p=d.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{},[a("v-autocomplete",{staticClass:"mb-n4",attrs:{solo:"","auto-select-first":"",clearable:"","hide-no-data":"",loading:t.loading,items:t.items,filter:t.filter,"search-input":t.search,label:"Search by class or instructor"},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}}),a("v-btn-toggle",{attrs:{color:"primary"}},[a("v-btn",{staticClass:"mx-4",on:{click:t.clickedShowLegend}},[t._v(" Legend ")])],1),a("v-tooltip",{attrs:{bottom:"","open-delay":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[a("div",t._g(t._b({staticClass:"d-inline-block",attrs:{id:"test"}},"div",n,!1),s),[a("v-checkbox",t._g(t._b({staticClass:"pt-0 pl-2",attrs:{label:"Include pandemic semesters"},model:{value:t.includePandemic,callback:function(e){t.includePandemic=e},expression:"includePandemic"}},"v-checkbox",n,!1),s))],1)]}}])},[a("span",[t._v("Include sections from Spring 2020, Summer 2020, Fall 2020, and Spring 2021")])]),t.showLegend?a("Legend",{staticClass:"ma-2"}):t._e(),t.classRows.length>0?a("InstructorHeader",{attrs:{sectionlabel:t.sectionlabel}}):t._e(),t._l(t.classRows,(function(t){return a("ClassRow",{key:t.label,attrs:{classrowdata:t}})})),0!=t.classRows.length||t.isLoading?t._e():a("v-container",{staticClass:"font-weight-light px-auto pt-8"},[a("v-row",{staticClass:"justify-center"},[t._v(" No results found. Try searching 'MA16100' or 'Peroulis' ")])],1),a("v-layout",{attrs:{"justify-center":""}},[t.isLoading?a("v-progress-circular",{staticClass:"pt-8",attrs:{size:70,width:7,color:"light-blue",indeterminate:""}}):t._e()],1)],2)},f=[],v=a("3835"),g=a("b85c"),_=(a("ac1f"),a("5319"),a("d3b7"),a("4fad"),a("4e827"),a("caad"),a("25f0"),a("4de4"),a("1276"),a("2532"),a("841c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.hover;return[a("v-container",{staticClass:"text-body-2 pa-0",class:{"grey lighten-3":s}},[a("v-row",{staticClass:"align-center px-1",class:{"font-weight-bold":t.allSections},attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"4",sm:"3",md:"2"}},[t._v(" "+t._s(t.classrowdata.label)+" ")]),a("v-col",{staticClass:"d-none d-md-flex justify-end",attrs:{cols:"1"}},[t._v(" "+t._s(t.classrowdata.count)+" ")]),a("v-col",{ref:"svgDiv",attrs:{cols:"7",sm:"8",md:"7"}},[a("v-menu",{attrs:{"open-on-hover":"","open-delay":"250",top:"","offset-y":"","z-index":"100000","nudge-top":"20"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[a("div",t._g(t._b({ref:"svgGraph",attrs:{id:t.classrowdata.label.replace(/\W/g,"")}},"div",n,!1),s))]}}],null,!0),model:{value:t.showPopover,callback:function(e){t.showPopover=e},expression:"showPopover"}},[a("GradeTable",{attrs:{data:t.classrowdata}})],1)],1),a("v-col",{staticClass:"d-none d-md-flex justify-end",attrs:{cols:"1"}},[t._v(" "+t._s(t.classrowdata.gpad.toFixed(2))+" ")]),a("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"1",md:"1"}},[t._v(" "+t._s(t.classrowdata.gpa.toFixed(2))+" ")])],1)],1)]}}])})}),m=[],b=a("898b"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"white"},[a("v-container",[a("v-row",[a("v-col",[t._v(" "+t._s(t.data.course_desc)+" ")]),a("v-col",{attrs:{cols:"auto"}},[t._v(" Instructor: "+t._s(t.data.instructor)+" ")]),a("v-col",{staticClass:"justify-end"},[a("div",{staticClass:"d-flex justify-end"},[t._v(" GPA: "+t._s(t.data.gpa.toFixed(2))+" ")])])],1)],1),a("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",t._l(t.tableHeaders,(function(e,s){return a("th",{key:s,staticClass:"text-center"},[t._v(" "+t._s(e)+" ")])})),0)]),a("tbody",[a("tr",t._l(t.tableData,(function(e,s){return a("td",{key:s,staticClass:"text-center"},[t._v(" "+t._s(e.toFixed(1))+"% ")])})),0)])]},proxy:!0}])})],1)},y=[],x={name:"GradeTable",props:["data"],data:function(){return{tableData:[],tableHeaders:[]}},created:function(){for(var t=["a_plus","a","a_minus","b_plus","b","b_minus","c_plus","c","c_minus","d_plus","d","d_minus","f"],e=0,a=t;e<a.length;e++){var s=a[e];0!=this.data[s]&&(this.tableData.push(this.data[s]),this.tableHeaders.push(this.gradeLabels(s)))}},methods:{gradeLabels:function(t){switch(t){case"a_plus":return"A+";case"a":return"A";case"a_minus":return"A-";case"b_plus":return"B+";case"b":return"B";case"b_minus":return"B-";case"c_plus":return"C+";case"c":return"C";case"c_minus":return"C-";case"d_plus":return"D+";case"d":return"D";case"d_minus":return"D-";default:return"F"}}}},A=x,C=a("6544"),F=a.n(C),S=a("62ad"),P=a("a523"),L=a("0fd9"),j=a("1f4f"),k=Object(u["a"])(A,w,y,!1,null,null,null),G=k.exports;F()(k,{VCol:S["a"],VContainer:P["a"],VRow:L["a"],VSimpleTable:j["a"]});var V={name:"ClassRow",props:["classrowdata"],data:function(){return{graphId:null,min:null,bot90:null,bot75:null,bot50:null,top50:null,top75:null,top90:null,max:null,allSections:!1,showPopover:!1}},beforeMount:function(){this.calculateDist(),this.graphId="#"+this.classrowdata.label.replace(/\W/g,""),this.allSections="All Sections"==this.classrowdata.label},mounted:function(){this.generateGraph(),window.addEventListener("resize",this.generateGraph)},beforeDestroy:function(){window.removeEventListener("resize",this.generateGraph)},methods:{generateGraph:function(){b["c"](this.graphId).html("");var t=20,e=25,a=5,s=20,n=this.$refs.svgDiv.clientWidth-2*t,r=b["c"](this.graphId).append("svg").attr("width",n+2*t).attr("height",e),l=b["b"]().domain([0,4]).range([t,n+t]),i=b["b"]().domain([1,-1]).range([180,360]),o=this.classrowdata,c=function(t,e,n,o){r.append("rect").attr("rx",8).attr("ry",8).attr("x",(function(){return l(t)-5})).attr("y",a).attr("width",(function(){return l(e)-l(t)+10})).attr("height",s).attr("fill",(function(){var t=i(o.gpad);return"hsla("+t+", 100%, 76%, "+n+")"}))};c(this.min,this.max,.2,o),c(this.bot90,this.top90,.2,o),c(this.bot75,this.top75,.2,o),c(this.bot50,this.top50,.6,o),r.append("rect").attr("x",(function(){return l(o.gpa)-1})).attr("y",a).attr("width",3).attr("height",s).attr("fill","rgba(108, 108, 108, 0.8)")},findGPA:function(t){switch(t){case 0:return 0;case 1:return.7;case 2:return 1;case 3:return 1.3;case 4:return 1.7;case 5:return 2;case 6:return 2.3;case 7:return 2.7;case 8:return 3;case 9:return 3.3;case 10:return 3.7;case 11:return 4;case 12:return 4}},calculateDist:function(){for(var t=this.classrowdata,e=t.a_plus||0,a=t.a||0,s=t.a_minus||0,n=t.b_plus||0,r=t.b||0,l=t.b_minus||0,i=t.c_plus||0,o=t.c||0,c=t.c_minus||0,u=t.d_plus||0,d=t.d||0,p=t.d_minus||0,h=t.f||0,f=a+e+s+n+r+l+i+o+c+u+d+p+h,v=[h,p,d,u,c,o,i,l,r,n,s,a,e],g=1;g<v.length;g++)v[g]=v[g]+v[g-1];for(var _=0;_<v.length;_++){var m=v[_];m/f>=.99&&null==this.max&&(this.max=this.findGPA(_)),m/f>=.95&&null==this.top90&&(this.top90=this.findGPA(_)),m/f>=.875&&null==this.top75&&(this.top75=this.findGPA(_)),m/f>=.75&&null==this.top50&&(this.top50=this.findGPA(_)),m/f>=.25&&null==this.bot50&&(this.bot50=this.findGPA(_)),m/f>=.125&&null==this.bot75&&(this.bot75=this.findGPA(_)),m/f>=.05&&null==this.bot90&&(this.bot90=this.findGPA(_)),m/f>0&&null==this.min&&(this.min=this.findGPA(_))}}},components:{GradeTable:G}},R=V,O=a("ce87"),E=a("e449"),I=Object(u["a"])(R,_,m,!1,null,null,null),D=I.exports;F()(I,{VCol:S["a"],VContainer:P["a"],VHover:O["a"],VMenu:E["a"],VRow:L["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0"},[a("v-row",{staticClass:"align-center text-decoration-underline px-1",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"4",sm:"3",md:"2"}},[a("div",{staticClass:"font-weight-light"},[t._v(t._s(t.sectionlabel))])]),a("v-col",{staticClass:"d-none d-md-flex justify-end",attrs:{cols:"1"}},[a("div",{staticClass:"font-weight-light"},[t._v("Sections")])]),a("v-col",{attrs:{cols:"7",sm:"8",md:"7"}},[a("div",{ref:"svgAxis",attrs:{id:"instructorheadersvg"}})]),a("v-col",{staticClass:"d-none d-md-flex justify-end",attrs:{cols:"1"}},[a("div",{staticClass:"font-weight-light"},[t._v("GPA Δ")])]),a("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"1",md:"1"}},[a("div",{staticClass:"font-weight-light"},[t._v("GPA")])])],1)],1)},B=[],H={name:"InstructorHeader",props:["sectionlabel"],setup:function(){},mounted:function(){this.generateAxis(),window.addEventListener("resize",this.generateAxis)},beforeDestroy:function(){window.removeEventListener("resize",this.generateAxis)},methods:{generateAxis:function(){b["c"]("#instructorheadersvg").html("").attr("ref","svgAxis");var t=20,e=30,a=this.$refs.svgAxis.clientWidth-2*t,s=b["c"]("#instructorheadersvg").append("svg").attr("width",a+2*t).attr("height",e),n=b["b"]().domain([0,4]).range([t,a+t]),r=b["a"](n).tickValues([0,1,2,3,4]);s.append("g").attr("class","axis").style("font-size","13px").style("font-family","Roboto").attr("transform","translate(0, "+(e-1).toString()+")").call(r)}}},$=H,z=Object(u["a"])($,T,B,!1,null,null,null),M=z.exports;F()(z,{VCol:S["a"],VContainer:P["a"],VRow:L["a"]});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{elevation:"3"}},[a("v-container",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("h4",[t._v(" Color Scale ")]),a("p",[t._v(" Bluer hues indicate a higher than average GPA while redder hues indicate a lower than average GPA.")]),a("v-container",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",[t._v(" +1.0 ")]),a("v-col",{staticClass:"d-flex justify-center"},[t._v(" +0.25 ")]),a("v-col",{staticClass:"d-flex justify-center"},[t._v(" -0.25 ")]),a("v-col",{staticClass:"d-flex justify-end"},[t._v(" -1.0 ")])],1),a("v-row",{ref:"gpaColorScale",attrs:{"no-gutters":""}},[a("div",{attrs:{id:"gpaColorScale"}})])],1)],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("h4",[t._v(" Percentile Scale ")]),a("p",[t._v(" The shading shows the distribution of grades with darker shades being closer to the median. ")]),a("v-container",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",[t._v(" 100% ")]),a("v-col",[t._v(" 95% ")]),a("v-col",[t._v(" 75% ")]),a("v-col",[t._v(" 50% ")])],1),a("v-row",{ref:"gpaPercentileScale",attrs:{"no-gutters":""}},[a("div",{attrs:{id:"gpaPercentileScale"}})])],1)],1)],1)],1)],1)},J=[],U={name:"Legend",setup:function(){},mounted:function(){this.generateLegend(),window.addEventListener("resize",this.generateLegend)},beforeDestroy:function(){window.removeEventListener("resize",this.generateLegend)},methods:{generateLegend:function(){b["c"]("#gpaColorScale").html("");var t=0,e=25,a=5,s=20,n=this.$refs.gpaColorScale.clientWidth-2*t,r=b["c"]("#gpaColorScale").append("svg").attr("width",n+2*t).attr("height",e),l=r.append("defs").append("linearGradient").attr("id","gradient").attr("x1","0%").attr("x2","100%").attr("y1","0%").attr("y2","0%");l.append("stop").attr("offset","0%").style("stop-color","hsla(180, 100%, 76%, 1)").style("stop-opacity",1),l.append("stop").attr("offset","50%").style("stop-color","hsla(270, 100%, 76%, 1)").style("stop-opacity",1),l.append("stop").attr("offset","100%").style("stop-color","hsla(359, 100%, 76%, 1)").style("stop-opacity",1),r.append("rect").attr("rx",8).attr("ry",8).attr("x",t).attr("y",a).attr("width",n).attr("height",s).style("fill","url(#gradient)"),this.generatePercentile()},generatePercentile:function(){b["c"]("#gpaPercentileScale").html("");var t=0,e=25,a=5,s=20,n=this.$refs.gpaPercentileScale.clientWidth-2*t,r=b["c"]("#gpaPercentileScale").append("svg").attr("width",n+2*t).attr("height",e),l=function(e,l){r.append("rect").attr("rx",8).attr("ry",8).attr("x",t+e*n).attr("y",a).attr("width",(function(){return n-e*n})).attr("height",s).attr("fill","hsla(270, 100%, 76%, "+l+")")};l(0,.2),l(.25,.2),l(.5,.2),l(.75,.6)}}},X=U,Y=a("b0af"),q=Object(u["a"])(X,W,J,!1,null,null,null),Z=q.exports;F()(q,{VCard:Y["a"],VCol:S["a"],VContainer:P["a"],VRow:L["a"]});var K={name:"SearchBar",setup:function(){},data:function(){return{hasSaved:!1,isEditing:null,isLoading:!1,model:null,search:null,loading:null,select:null,items:[],sections:[],classRows:[],sectionlabel:null,includePandemic:!0,legendLabel:"Show Legend",showLegend:!1}},created:function(){this.getItems()},methods:{filter:function(t,e,a){if(a=a.replace(",","").replace(".",""),e=e.replace(",","").replace(".",""),e.charCodeAt(0)>=65&&e.charCodeAt(0)<=90&&e.charCodeAt(1)>=65&&e.charCodeAt(1)<=90&&(a=a.replace(/\s/g,""),e=e.replace(/\s/g,"")),a.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1)return!0},getItems:function(){var t=this;fetch("/api/indexes").then((function(t){return t.json()})).then((function(e){t.items=e})).catch((function(t){console.log(t)}))},clickedShowLegend:function(){this.showLegend?this.showLegend=!1:this.showLegend=!0,"Show Legend"==this.legendLabel?this.legendLabel="Hide Legend":this.legendLabel="Show Legend"},sectionGPA:function(t){var e=parseFloat(t.a_plus)||0,a=parseFloat(t.a)||0,s=parseFloat(t.a_minus)||0,n=parseFloat(t.b_plus)||0,r=parseFloat(t.b)||0,l=parseFloat(t.b_minus)||0,i=parseFloat(t.c_plus)||0,o=parseFloat(t.c)||0,c=parseFloat(t.c_minus)||0,u=parseFloat(t.d_plus)||0,d=parseFloat(t.d)||0,p=parseFloat(t.d_minus)||0,h=parseFloat(t.e)||0,f=parseFloat(t.f)||0,v=parseFloat(t.i_f)||0,g=a+e+s+n+r+l+o+i+c+u+d+p+h+f+v;if(0==g)return 0;var _=(4*(a+e)+3.7*s+3.3*n+3*r+2.7*l+2.3*i+2*o+1.7*c+1.3*u+1*d+.7*p)/g;return _},newAverage:function(t,e,a){return(t*e+a)/(e+1)},calculateSections:function(t){var e,a={all:{label:"All Sections",course_desc:"All",instructor:"All",count:0,a_plus:0,a:0,a_minus:0,b_plus:0,b:0,b_minus:0,c_plus:0,c:0,c_minus:0,d_plus:0,d:0,d_minus:0,f:0,gpad:0,gpa:0}},s=Object(g["a"])(this.sections);try{for(s.s();!(e=s.n()).done;){var n=e.value;if((![202020,202030,202110,2020120].includes(n.academic_period)||this.includePandemic)&&0!=this.sectionGPA(n)){var r=a["all"].count;a["all"].a_plus=this.newAverage(a["all"].a_plus,r,parseFloat(n.a_plus)||0),a["all"].a=this.newAverage(a["all"].a,r,parseFloat(n.a)||0),a["all"].a_minus=this.newAverage(a["all"].a_minus,r,parseFloat(n.a_minus)||0),a["all"].b_plus=this.newAverage(a["all"].b_plus,r,parseFloat(n.b_plus)||0),a["all"].b=this.newAverage(a["all"].b,r,parseFloat(n.b)||0),a["all"].b_minus=this.newAverage(a["all"].b_plus,r,parseFloat(n.b_minus)||0),a["all"].c_plus=this.newAverage(a["all"].c_plus,r,parseFloat(n.c_plus)||0),a["all"].c=this.newAverage(a["all"].c,r,parseFloat(n.c)||0),a["all"].c_minus=this.newAverage(a["all"].c_minus,r,parseFloat(n.c_minus)||0),a["all"].d_plus=this.newAverage(a["all"].d_plus,r,parseFloat(n.d_plus)||0),a["all"].d=this.newAverage(a["all"].d,r,parseFloat(n.d)||0),a["all"].d_minus=this.newAverage(a["all"].d_minus,r,parseFloat(n.d_minus)||0),a["all"].f=this.newAverage(a["all"].f,r,(parseFloat(n.f)||0)+(parseFloat(n.e)||0)+(parseFloat(n.i_f)||0)),a["all"].gpa=this.newAverage(a["all"].gpa,r,this.sectionGPA(n)),a["all"].count+=1;var l=void 0,i=void 0;if(t?(l=n.subject+n.course_num.toString(),i=n.subject+" "+n.course_num.toString(),a["all"].instructor=n.instructor):(a["all"].course_desc=n.title,l=n.instructor,i=n.instructor),l in a){var o=a[l].count;a[l].a_plus=this.newAverage(a[l].a_plus,o,parseFloat(n.a_plus)||0),a[l].a=this.newAverage(a[l].a,o,parseFloat(n.a)||0),a[l].a_minus=this.newAverage(a[l].a_minus,o,parseFloat(n.a_minus)||0),a[l].b_plus=this.newAverage(a[l].b_plus,o,parseFloat(n.b_plus)||0),a[l].b=this.newAverage(a[l].b,o,parseFloat(n.b)||0),a[l].b_minus=this.newAverage(a[l].b_plus,o,parseFloat(n.b_minus)||0),a[l].c_plus=this.newAverage(a[l].c_plus,o,parseFloat(n.c_plus)||0),a[l].c=this.newAverage(a[l].c,o,parseFloat(n.c)||0),a[l].c_minus=this.newAverage(a[l].c_minus,o,parseFloat(n.c_minus)||0),a[l].d_plus=this.newAverage(a[l].d_plus,o,parseFloat(n.d_plus)||0),a[l].d=this.newAverage(a[l].d,o,parseFloat(n.d)||0),a[l].d_minus=this.newAverage(a[l].d_minus,o,parseFloat(n.d_minus)||0),a[l].f=this.newAverage(a[l].f,o,(parseFloat(n.f)||0)+(parseFloat(n.e)||0)+(parseFloat(n.i_f)||0)),a[l].gpa=this.newAverage(a[l].gpa,o,this.sectionGPA(n)),a[l].count+=1}else a[l]={label:i,course_desc:n.title,instructor:n.instructor,count:1,a_plus:parseFloat(n.a_plus)||0,a:parseFloat(n.a)||0,a_minus:parseFloat(n.a_minus)||0,b_plus:parseFloat(n.b_plus)||0,b:parseFloat(n.b)||0,b_minus:parseFloat(n.b_minus)||0,c_plus:parseFloat(n.c_plus)||0,c:parseFloat(n.c)||0,c_minus:parseFloat(n.c_minus)||0,d_plus:parseFloat(n.d_plus)||0,d:parseFloat(n.d)||0,d_minus:parseFloat(n.d_minus)||0,f:(parseFloat(n.f)||0)+(parseFloat(n.e)||0)+(parseFloat(n.i_f)||0),gpad:0,gpa:this.sectionGPA(n)}}}}catch(_){s.e(_)}finally{s.f()}for(var c=a["all"].gpa,u=0,d=Object.entries(a);u<d.length;u++){var p=Object(v["a"])(d[u],2),h=p[0],f=p[1];"all"==h||(f.gpad=f.gpa-c),this.classRows.push(f)}this.classRows.sort(this.classSort),2==this.classRows.length&&this.classRows.shift(),0==this.classRows[0].gpa&&(this.classRows=[])},classSort:function(t,e){return"All Sections"==t.label||"All Sections"==e.label?0:t.gpa<e.gpa?1:t.gpa>e.gpa?-1:0},updateSections:function(t){var e=this;if(this.sections=[],this.classRows=[],this.isLoading=!0,/[A-Z]{2,4}\d{5}/.exec(t)){var a=t.split(/([A-Z]{2,4})(\d{5})/).filter((function(t){return""!==t})),s=Object(v["a"])(a,2),n=s[0],r=s[1];fetch("/api/grades?course="+n+" "+r).then((function(t){return t.json()})).then((function(t){e.sections=t,e.isLoading=!1,e.calculateSections(!1),e.sectionlabel="Instructors"})).catch((function(t){console.log(t)}))}else fetch("/api/grades?instructor="+t).then((function(t){return t.json()})).then((function(t){e.sections=t,e.isLoading=!1,e.calculateSections(!0),e.sectionlabel="Classes"})).catch((function(t){console.log(t)}))}},watch:{search:function(t){null==t&&(this.sections=[],this.classRows=[]),!t|!this.items.includes(t)||this.updateSections(t)},includePandemic:function(){this.updateSections(this.search)}},components:{ClassRow:D,InstructorHeader:M,Legend:Z}},N=K,Q=a("c6a6"),tt=a("8336"),et=a("a609"),at=a("ac7c"),st=a("a722"),nt=a("490a"),rt=a("3a2f"),lt=Object(u["a"])(N,h,f,!1,null,null,null),it=lt.exports;F()(lt,{VAutocomplete:Q["a"],VBtn:tt["a"],VBtnToggle:et["a"],VCheckbox:at["a"],VContainer:P["a"],VLayout:st["a"],VProgressCircular:nt["a"],VRow:L["a"],VTooltip:rt["a"]});var ot={name:"App",components:{Header:p,SearchBar:it},data:function(){return{dev:!1}},created:function(){this.dev=!1}},ct=ot,ut=(a("70a3"),a("0798")),dt=a("7496"),pt=a("f6c4"),ht=Object(u["a"])(ct,n,r,!1,null,"8827ad7e",null),ft=ht.exports;F()(ht,{VAlert:ut["a"],VApp:dt["a"],VCol:S["a"],VContainer:P["a"],VMain:pt["a"],VRow:L["a"]});var vt=a("f309");s["a"].use(vt["a"]);var gt=new vt["a"]({});s["a"].config.productionTip=!1,new s["a"]({vuetify:gt,render:function(t){return t(ft)}}).$mount("#app")},"70a3":function(t,e,a){"use strict";a("b824")},9759:function(t,e,a){},b824:function(t,e,a){}});
//# sourceMappingURL=app.67763c6d.js.map