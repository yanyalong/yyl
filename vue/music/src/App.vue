<template>
<div id='app'> 
<!-- 头部 -->
<my-header></my-header>
<!-- tab -->
<my-tab></my-tab>
<!-- 路由切换 -->
<router-view></router-view>
</div>
</template>
<script>
import  myHeader  from './components/my-header'
import  myTab from  './components/my-tab'
export default {
  components:{myHeader,myTab}
}
</script>
<style lang="less" scoped>
@import '~style/index.less';
#app{
  background: @black;
}
</style>
