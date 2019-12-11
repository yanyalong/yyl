<template>
  <div id="app">
      <box></box>
  </div>
</template>

<script>

import box from  './base/box'
export default {
  components:{box},
  name: 'app',
  created(){
    console.log(this)
  }
}
</script>

<style>

</style>
