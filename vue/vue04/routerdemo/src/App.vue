<template>
  <div id="app">
      <h3>这里是跟组件111</h3>
      <button @click='back'>back</button>
        <!-- <router-link 
          active-class='sel' 
          :to="{name:'hehe'}" tag='span'>推荐</router-link>
        <router-link 
          active-class='sel' 
          to='/singer' tag='span'>
        歌手</router-link> -->
        <button @click='jump("recommend")'>推荐</button>
        <button @click='jump("singer")' >歌手</button>
         <button @click='jump("rank")' >排行</button>
          <button @click='jump("my")' >我的</button>
      <hr>
      <router-view></router-view>
      <!-- <router-view name='r1'></router-view>
      <router-view name='r2'></router-view> -->
  </div>
</template>

<script>
export default {
  methods: {
    back(){
      this.$router.go(-1)
    },
    jump(tag){
      // this.$router.push('/singer')
      //this.$router.push({path:'/singer'})
      // this.$router.push({name:'hehe'})
      // [a,b,c,d]
      // this.$router.push(tag)
      // 路由传参 query  path路径可以 name也可以
      // this.$router.push({path:'/singer',query:{us:123,ps:123}})
      //this.$router.push({name:'singer',query:{us:123,ps:123}})
      // 路由传参第二种方式  params  参数不会出现在地址栏 页面刷新参数丢失
      // this.$router.push({name:'singer',params:{us:123,ps:123}})
      // parmas 不能和path一起使用
      // this.$router.push({path:'/singer',params:{us:123,ps:123}}) x
      // 动态路由  路由里的配置路径可以改变
      // 可以将要传递的参数放在动态路径里  解决prams刷新参数丢失的问题
      this.$router.push('/singer/hehe')
      console.log(this)
    }
  },

}
</script>

<style >
.sel{
  color: blue;
}
</style>
