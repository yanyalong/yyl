<template>
  <div id="app">
      <h3>组件1</h3>
      {{this.$store.state.name}}
  </div>
</template>

<script>


export default {

  created(){
    console.log(this)
  }
}
</script>

<style>

</style>
