<template>
  <div id="app"> 
    <h3>详情页</h3>
    <button @click='back'>back</button>
  </div>
</template>

<script>

export default {
 methods:{
   back(){
     this.$router.go(-1)
   }
 },
 created(){
   let mid=this.$route.params.mid
   console.log('mid',mid)
 },
 beforeRouteEnter (to, from, next) {
    // 路由进入之前触发
    // 网路请求 create
    // token 验证  全局路由守卫
    next()
 },
 beforeRouteUpdate(to,from,next) {
   console.log('组件内的守卫')
  // console.log('to',to)
  // console.log('from',from)
  let mid=to.params.mid
  console.log('mid',mid)
  next()
  // 组件内的守卫更新之前  动态路由 参数发生修改 组件是复用不会重新销毁创建 create生命周期
  // 只有创建的时候执行一次
 },
 beforeRouteLeave (to, from, next) {
      console.log('组价准备离开')
      let state=window.confirm('你确定要离开页面嘛')
      if(state){

        next()
      }
 }
//  watch:{
//    '$router'(newRoute,oldRoute){
//      console.log('路由改变',newRoute)
//    }
//  }
}
</script>

<style>

</style>
