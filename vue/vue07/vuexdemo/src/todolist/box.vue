<template>
  <div id="app">
      <my-input></my-input>
      <my-list></my-list>
      <my-tab></my-tab>
  </div>
</template>

<script>

import  myInput from  './my-input.vue'
import  myList from  './my-list.vue'
import myTab from  './my-tab'
export default {
  components:{myInput,myList,myTab},

}
</script>

<style>

</style>
