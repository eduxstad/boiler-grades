<template>
  <v-app>
    <v-main>
      <Sample/>
      <v-container>
        <v-row>
          <v-col sm="12" md="12" lg="12" xl="8">
            <SearchBar/>
          </v-col>
        </v-row>
      </v-container>
      <p class="d-flex d-sm-none">Xtra-Small</p>
      <p class="d-none d-sm-flex d-md-none">Small</p>
      <p class="d-none d-md-flex d-lg-none">Medium</p>
      <p class="d-none d-lg-flex d-xl-none">Large</p>
      <p class="d-none d-xl-flex">Xtra-Large</p>
    </v-main>
  </v-app>
</template>

<script>
import Sample from './components/Sample';
import SearchBar from './components/SearchBar';

export default {
  name: 'App',

  components: {
    Sample,
    SearchBar,
  },

  data: () => ({
    //
  }),
};
</script>
