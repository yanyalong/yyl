<template>
<div id='app'> 
<!-- 头部 -->
<my-header></my-header>
<!-- tab -->
<my-tab></my-tab>
<!-- 路由切换 -->
<router-view></router-view>
<!-- 播放器页面 -->
<player></player>
<!-- <base-test></base-test> -->
</div>
</template>
<script>
import  myHeader  from './components/my-header'
import  myTab from  './components/my-tab'
import player from 'pages/Player/Player.vue'
// import baseTest from  'components/base'
export default {
  components:{myHeader,myTab,player}
}
</script>
<style lang="less" scoped>
@import '~style/index.less';
#app{
  background: @black;
}
</style>
