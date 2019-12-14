import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from './base/home'
import Singer from  './base/singer'
import  My from  './base/my'
import Detail from  './base/detail'
let router= new Router({
  routes:[{
    path:'/home',
    component:Home
  },
  {
    path:'/singer',
    component:Singer,
    children:[{
      path:':mid',
      component:Detail
 
    }
    ]
  },
  {
    path:'/my',
    component:My,
    beforeEnter(to,from,next){
      console.log('路由独享守卫 局部守卫')
      next()
    }
  }
]
}) 
// 全局前置
// router.beforeEach((to,from,next)=>{
//   console.log('from',from)
//   console.log('to',to)
//   let user=['/my','/singer']
//   let toPath=to.path
//   if(user.indexOf(toPath)===-1){
//     next()
//   }else{
//     if(localStorage.getItem('token')){
//       next()
//     }else{
//       next('/home')
//     }
//   }

// })
// 全局后置
// router.afterEach((to,from)=>{
//   console.log('全局后置')
//   console.log('from',from)
//   console.log('to',to)
// })
// console.log(router)
export default  router 

