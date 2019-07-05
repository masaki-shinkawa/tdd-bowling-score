<template>
  <div id="app">
    <!-- {{ this.fizzbuzz }} -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import { run } from "./fizzbuzz";
import { run } from "./bowlingScore";

export default {
  name: "app",
  // data: () => {
    // return {
    //   fizzbuzz: ""
    // };
  // },
  components: {
    // HelloWorld
  },
  created() {
    run();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
