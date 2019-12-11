<template>
  <div id="app">
      <input type="text" v-model='inputValue'>
      <button @click='add'>add</button>
  </div>
</template>

<script>

import {mapMutations} from 'vuex'
export default {
  data(){
    return {
      inputValue:'请输入事项'
    }
  },
   methods: {
     ...mapMutations(['addList']),
     add(){
       this.addList(this.inputValue)
     }
   },
}
</script>

<style>

</style>
