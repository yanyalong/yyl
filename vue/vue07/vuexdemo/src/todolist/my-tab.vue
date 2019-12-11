<template>
  <div id="app">
      <span @click='changeSelIndex(0)'>全部</span> 
      <span @click='changeSelIndex(1)'>已完成</span>
      <span @click='changeSelIndex(-1)'>未完成</span> 
  </div>
</template>

<script>

import {mapMutations} from 'vuex'
export default {
  methods: {
    ...mapMutations(['changeSelIndex'])
    
  },
}
</script>

<style>

</style>
