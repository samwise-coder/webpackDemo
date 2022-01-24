<template>
  <div id="app">
    <test-toast />
    <input v-focus type="text" />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <canvas ref="canvasTest" class="ttt" width="400" height="400"></canvas>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    this.$myMethod(); //插件方法
    this.destrut();
  },
  methods: {
    destrut() {
      let ca = this.$refs.canvasTest;
      let ctx = ca.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(399, 0);
      ctx.stroke();
    },
    foo() {
      console.log("webpack配置需要和webpackChain配合使用！----");
    },
  },
};
</script>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ttt {
  background-color: antiquewhite;
}
</style>
