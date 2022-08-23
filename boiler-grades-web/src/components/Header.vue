<template>
  <div class="headerdiv">
    <div class="imagefilter">
      <h1 class="text-center pagetitle">Boiler Grades</h1>
      <h3 class="text-center">
        View the average GPA of professors and courses at Purdue
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  setup() {},
};
</script>

<style scoped>
.headerdiv {
  background-image: url("./../assets/fountain.webp");
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  color: white;
  font-size: 1.2rem;
  box-shadow: 0px 5px 5px rgb(196, 196, 196);
}

.pagetitle {
    font-family: 'Garamond';
}

.imagefilter {
  background-color: rgb(0, 0, 0, 0.5);
  padding: 20px;
}
</style>
