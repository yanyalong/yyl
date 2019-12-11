<template>
  <div id="app">
      <h3>组件2</h3>
      {{age}}
  </div>
</template>

<script>

import {mapState} from  'vuex'
export default {
 computed: {
   ...mapState({age:state=>state.B.age})
 },
}
</script>

<style>

</style>
