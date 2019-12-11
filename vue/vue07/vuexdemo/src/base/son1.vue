<template>
  <div id="app">
      <h3>组件1</h3>
      <!-- {{this.$store.state.name}} -->
      mapState{{stateName}}
      {{name}}
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
  computed: {
    
    // ...mapState(['name','age','sex']),
    ...mapState({stateName:state=>state.name}),
    name(){
      return "hehe"
    }
  },
  created(){
    console.log(this)
  }
}
</script>

<style>

</style>
