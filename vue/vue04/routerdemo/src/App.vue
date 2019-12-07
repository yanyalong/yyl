<template>
  <div id="app">
      <h3>这里是跟组件111</h3>
        <router-link 
          active-class='sel' 
          :to="{name:'hehe'}" tag='span'>推荐</router-link>
        <router-link 
          active-class='sel' 
          to='/singer' tag='span'>
        歌手</router-link>
      <hr>
      <router-view></router-view>
      <router-view name='r1'></router-view>
      <router-view name='r2'></router-view>
  </div>
</template>

<script>


export default {

}
</script>

<style >
.sel{
  color: blue;
}
</style>
