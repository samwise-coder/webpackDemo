import toast from './toast.vue'
let myPlugin = {}
myPlugin.install = function (Vue, options) {
    console.log("option", options)
    Vue.prototype.$myMethod = function () {
        console.log("this is a plugin method!!!")
    }
    Vue.component(toast.name, toast)
}
export default myPlugin