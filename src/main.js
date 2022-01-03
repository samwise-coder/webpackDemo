import Vue from 'vue'
import App from './App.vue'
//自定义插件 
import myPlugin from './plugin/myPlugin'

Vue.use(myPlugin)
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
