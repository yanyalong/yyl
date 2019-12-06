import Vue from 'vue'
// 引入vue <script src='../base/vue.js'>
import App from './App.vue'
// 引入一个叫app的vue组件
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
