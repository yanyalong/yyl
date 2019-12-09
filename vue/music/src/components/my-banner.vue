<template>
  <div class="my-banner">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in slides" 
                :key='index'
            >
              <img :src="item.picUrl" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
// 引入swiper js文件
import  'swiper/dist/css/swiper.min.css';
// 引入swiper 样式文件
export default {
  props:{
    // 创建轮播的数据
    slides:{
      default:[],
      type:Array
    }
  },
  methods:{
    initBanner(){
      this.swiper=new Swiper('.swiper-container',{
        loop:true
      })
    }
  },
  // mounted(){
  //   // setTimeout(()=>{

  //     this.initBanner()
  //   // },1000)
  // },
  watch:{
    slides(newVal,oldValue){
      this.$nextTick(()=> {
        // 获取完整的swiper dom元素
        this.initBanner()
      })
    }
  }
}
/*
同步直接赋值没哟问题
变成异步网络请求  轮播图不能滚动
初始化轮播图 容器层的宽度为0 导致不能滚动
1.延时初始化 -》 不能控制ajax请求的时间
2.watch 监听数据的改变 slider  watch dom元素还没有更新
3. this.$nextTick(()=>{ 上一次数据变化 引起的dom 更新结束之后 
才会执行回调 })
      // []=>[1,2,3,4]
      // watch
      // 跟新页面
      // 执行$$nextTick 的回调
      // console.log(newVal,oldValue)
*/ 
</script>
<style scoped lang="less">
@import  '~style/index.less';
.my-banner{
  .w(375);
  height: 150px;
  .swiper-container{
    .w(375);
    height: 100%;
  }
}
</style>
