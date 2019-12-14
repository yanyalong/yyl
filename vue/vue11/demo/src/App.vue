<template>
  <div id="app">
     <router-link to='/home'>首页</router-link>
     <router-link to='/singer'>歌手</router-link>
     <router-link to='/my'>我的</router-link>
     <router-view></router-view>
  </div>
</template>

<script>


export default {

  name: 'app',
  created(){
    console.log(this)
  }
}
</script>

<style>

</style>
