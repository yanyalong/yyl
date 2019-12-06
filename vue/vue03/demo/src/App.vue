<template>
  <div class='demo'>
      这里单文件组件
      {{name}}
      <hr>
      <hehe></hehe>
  </div>
</template>
<script>
// Vue.componet('hehe',{})
import Son from  './Son'
export default {
  components:{
    hehe:Son
  },
  data () {
    return {
      name:'🙃'
    }
  }
}
</script>
<style >
.demo{
  width: 100px;
  height: 100px;
  background: red;
}
  
</style>