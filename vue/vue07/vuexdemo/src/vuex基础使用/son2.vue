<template>
  <div id="app">
      <h3>组件2</h3>
      {{name}}
  </div>
</template>

<script>


export default {
  computed: {
    name(){
      return this.$store.state.name
    }
  },

  created(){
    console.log(this)
  }
}
</script>

<style>

</style>
