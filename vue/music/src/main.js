import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  './style/reset.css'
// 把样式当成模块引入
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
