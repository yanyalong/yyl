<template>
  <div id="app">
      <h3>组件1</h3>
      {{name}}
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({name:state=>state.A.name})
  },
}
</script>

<style>

</style>
