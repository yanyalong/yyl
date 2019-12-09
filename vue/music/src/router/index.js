import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Recommend from 'pages/Recommend'
import Singer from 'pages/Singer'
import Rank from 'pages/Rank'
import Search from 'pages/Search'



const router = new VueRouter({
  routes:[
    {
      path:'/recommend',
      component:Recommend
    },
    {
      path:'/singer',
      component:Singer
    },
    {
      path:'/rank',
      component:Rank
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/',
      redirect:'/recommend'
    }
  ]
})

export default router
