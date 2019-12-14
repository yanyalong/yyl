<template>
  <div id="app">
      
    首页组件
    <box>
       <p slot='top'>在上面</p>
      <span slot='bottom'>在下面</span>
    </box>
  </div>
</template>

<script>
import box from './box';
export default {
  components:{box}

}
</script>

<style>

</style>
