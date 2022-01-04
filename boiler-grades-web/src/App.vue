<template>
  <v-app>
    <v-main>
      <Sample/>
      <SearchBar/>
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
