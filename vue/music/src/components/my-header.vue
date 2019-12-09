<template>
  <div class="my-header">
      <!-- <img src="/favicon.ico" alt="">
      <img src="../assets/logo.png" alt=""> -->
      <!-- <hr> -->
      <!-- <img :src="img1" alt="">
      <img :src="img2" alt=""> -->
      Music
  </div>
</template>

<script>
/*
图片的使用方式
1.直接写路径
public 目录下的图片 使用根路径 /
其他目录的图片使用相对路径
2.变量
public  变量可以是跟路径
其他目录下  图片想用变量 需要用import 加载图片

*/
import logo from  '../assets/logo.png'
export default {

   data(){
     return{
       img1:'/favicon.ico',
       img2:logo
     }
   }
}
</script>
<style scoped lang="less">
@import '../style/index.less';
.my-header{
  .w(375);
  height: 44px;
  line-height: 44px;
  background: @black;
  color: @yellow;
  font-size: @fs-l;
  text-align: center;
}
</style>
