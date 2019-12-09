import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  './style/reset.css'
import axios from 'utils/axios.js'
import { prototype } from 'stream'
// 把样式当成模块引入
Vue.config.productionTip = false

Vue.prototype.$axios=axios 
// 将axios请求模块 挂载到vue的原型上


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
