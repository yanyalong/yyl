<template>
  <div id="app">
      <h3>组件2</h3>
      <!-- {{this.$store.getters.doubleName}} -->
      {{doubleName}}
  </div>
</template>

<script>

import {mapGetters} from  'vuex'
export default {
  computed: {
    ...mapGetters(['doubleName'])
  },

  created(){
    console.log(this)
  }
}
</script>

<style>

</style>
