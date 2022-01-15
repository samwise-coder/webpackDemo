<template>
  <div id="app">
    <test-toast />
    <input v-focus type="text" />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
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
      let obj = new Proxy(
        {},
        {
          get: function (target, propKey, receiver) {
            console.log(
              "target:",
              target,
              "propKey:",
              propKey,
              "recevier:",
              receiver
            );
            return Reflect.get(target, propKey, receiver);
          },
          set: function (target, propKey, value, receiver) {
            console.log(
              "target:",
              target,
              "propKey:",
              propKey,
              "value:",
              value,
              "recevier:",
              receiver
            );
            return Reflect.set(target, propKey, value, receiver);
          },
        }
      );
      obj.count = 1;
      let testPro = new Proxy(
        {},
        {
          get: function () {
            return 35;
          },
        }
      );
      console.log(testPro.time);
    },
    foo() {
      console.log("webpack配置需要和webpackChain配合使用！----");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
