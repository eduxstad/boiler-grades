<template>
  <v-app>
    <v-main>
      <Header/>
      <v-container >
        <v-row class="justify-center">
          <v-col sm="12" md="12" lg="12" xl="8" class="content">
            <SearchBar/>
            <v-alert class="mx-8 mt-16" type='warning' colored-border elevation="1" border="left">
              Warning: Correlation is not causation. Historical averages may not predict 
              future grades. Speak to an advisor before making academically impactful decisions. 
            </v-alert>
            <v-container class="mt-8">
            <h2>Data</h2>
            <p>    
            This website uses data provided by Purdue through a 
            <a target="_blank" href="https://www.purdue.edu/legalcounsel/public/index.html">Public Records</a> 
            request.
            You can access the raw data 
            <a target="_blank" href="https://purdue0-my.sharepoint.com/:x:/g/personal/eduxstad_purdue_edu/EdC_vaVTb5RBo3zM-guzJjEBYpku8Qz6sRWyAjFwKvcYEw?e=X9nPrA">
            online</a>
             or via 
            <a target="_blank" href="https://github.com/eduxstad/boiler-grades/raw/main/grades.xlsx">
            download (9 MB)</a>
            . It contains
            data from all courses at the West Lafayette campus with more than 10 students
            from Summer 2016 to Fall 2021. Some courses may not be shown if they only 
            assigned non-weighted grades (such as pass/fail).  
            </p>
            <h2>Attribution</h2>
            <p> This website was inspired by the team at 
            <a target="_blank" href="https://gophergrades.com">
            GopherGrades</a>
             (from the University of Minnesota), the team lead by
            <a target="_blank" href="https://waf.cs.illinois.edu/discovery/grade_disparity_between_sections_at_uiuc/">
            Wade Fagen-Ulmschneider</a>
             (from the University of Illinois), and 
            <a target="_blank" href="https://austingwalters.com/foia-requesting-100-universities/">
            Austin G. Walters</a>. Fall 2021 and Spring 2022 data was provided by Joey Diesen.
            </p>
            <h2>Code</h2>
            <p>This website is open source. If you'd like to report or fix a bug, 
            suggest an improvement or update the dataset please visit the
            <a target="_blank" href="https://github.com/eduxstad/boiler-grades"> 
            GitHub repository</a>.
            </p>
            <p>Built with 🚂🔨 by <a target="_blank" href="https://github.com/eduxstad">eduxstad</a>.</p>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-if="dev">
      <p class="d-flex d-sm-none">Xtra-Small</p>
      <p class="d-none d-sm-flex d-md-none">Small</p>
      <p class="d-none d-md-flex d-lg-none">Medium</p>
      <p class="d-none d-lg-flex d-xl-none">Large</p>
      <p class="d-none d-xl-flex">Xtra-Large</p>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import SearchBar from './components/SearchBar';
export default {
  name: 'App',

  components: {
    Header,
    SearchBar,
  },
  data: () => ({
    dev: false,
  }),
  created() {
    this.dev = process.env.NODE_ENV == 'development';
  }
};
</script>

<style scoped>
.content {
  /*background-color: rgba(128, 128, 128, 0.1);*/
  border-radius: 10px;
}
</style>
