<template>
  <div id="app">
      <h3>这里是跟组件111</h3>
      <!-- <Recommend v-if='toggle'></Recommend>
      <Singer v-else></Singer> -->
      <!-- <component :is='toggle?"Recommend":"Singer"'></component> -->
       <div :is='toggle?"Recommend":"Singer"'></div>
  </div>
</template>

<script>

import Recommend from './Recommend'
import Singer from './Singer'
export default {
   components:{Recommend,Singer},
   data(){
     return {
       toggle:false
     }
   }
}
</script>

<style lang="less">

</style>
