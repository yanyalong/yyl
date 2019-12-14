<template>
  <div id="app">
      
  歌手组件
  <button @click='jump(123)'>123</button>
  <button @click='jump(456)'>456</button>
  <button @click='jump(789)'>789</button>
  <hr>
  <router-view></router-view>
  </div>
</template>

<script>

export default {
 methods:{
   jump(mid){
     this.$router.push(`/singer/${mid}`)
   }
 }

}
</script>

<style>

</style>
