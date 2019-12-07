/*
1.引入vue 
2.引入路由
3.使用路由
4.创建路由对象
5.抛出路由对象
6.配置路由  地址栏路径和组件的联系
*/ 
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Recommend from  '../Recommend.vue'
import Recommend1 from  '../Recommend1.vue'
import Recommend2 from  '../Recommend2.vue'
import Singer from  '../Singer.vue'
import Rank from  '../Rank.vue'
import My from  '../My.vue'
import Login from  '../Login.vue'
import Info from  '../Info.vue'
let router=new VueRouter({
  mode:'history',//'hash'默认,
  routes:[
    // {
    //   path:'/recommend/a/b/cc/d/d/e/e/d/d/d/d',
    //   name:'hehe',
    //   components:{
    //     default:Recommend,
    //     r1:Recommend1,
    //     r2:Recommend2,
    //   }
    // },
       {
      path:'/recommend',
      name:'hehe',
      component:Recommend
    },
    {
      path:'/singer/:hehe/:xixi',
      name:'singer',
      component:Singer
    },
    {
      path:'/my',
      component:My,
      children:[
        {
          path:'login',
          component:Login
        },{
          path:'info',
          component:Info
        }
      ]
    },
    {
      path:'/rank',
      component:Rank
    },{
      path:'/',
      redirect:'/recommend'
    }
  ]
})

export default router