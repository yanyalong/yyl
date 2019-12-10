<template>
  <div class="singer">
    <!-- 歌手列表 -->
    <div class='wrapper'>
      <ul class='content'>
        <li v-for='(item,index) in singers' 
        :key='index'
        :ref='item.title'
        >
          <h3>{{item.title}}</h3>
          <ol>
            <li v-for='(sItem,sindex) in item.list' 
            class='singerItem'
            @click='jump(sItem.Fsinger_mid)'
            :key='sindex'>
              <img :src="sItem.avator" alt="">
              {{sItem.Fsinger_name}}
            </li>
          </ol>
        </li>
      </ul>
    </div>
    <!-- 索引列表 -->
    <ul class='findexList'
        @touchstart='touchStart'
        @touchmove='touchMove'
        @touchend='touchEnd'
        ref='ul'
    >
      <li v-for='(item,index) in fIndexList' 
        :key='index'
        :class='item===selIndex?"sel":""'
        @click="toggle(item)"
      >
        {{item}}
      </li>
    </ul>
    <!-- 嵌套路由 音乐列表 -->
    <router-view></router-view>
  </div>
</template>

<script>

import {getSingerList}  from 'api/singer.js'
import {getData} from './singer.js'
import BS from 'better-scroll'
export default {
  data(){
    return{
      selIndex:'hot',
      singers: [
        // {index:'a',list:['a1','a2','a3']},
        // {index:'b',list:['b1','b2','b3']},
        // {index:'c',list:['c1','c2','c3']}
      ]
    }
  },
  computed:{
    fIndexList(){
      let arr=this.singers.map((item)=>{
        return item.title
      })
      return arr
    }
  },
  methods: {
    jump(mid){
      // 跳转详情页
      this.$router.push(`/singer/${mid}`)
    },
    touchStart(e){
      this.ulTop=this.$refs.ul.getBoundingClientRect().top
      // 索引列表距离顶部的位置
       console.log(this.touchY)
    },
    touchMove(e){
      //移动过的y坐标 距离顶部
     let moveY=e.touches[0].clientY
     // 移动过的距离
     let distance=moveY-this.ulTop
     // 根据移动过的距离计算 移动过的li数量  
     let num=Math.ceil(distance/20)
     // 边界判断条件 
     // 根据现在所在的格数获取 下标  
     let findex=this.fIndexList[num-1]
      console.log('移动的距离',distance,num,findex)
      this.selIndex=findex
      this.bs.scrollToElement(this.$refs[findex][0])
    },
    touchEnd(e){

    },
    toggle(item) {
      // 索引列表的点击事件
      this.selIndex = item
      // 让better-scroll 具体滚动到某一个元素  
      // 给滚动位置做一个标记可以获取
      this.bs.scrollToElement(this.$refs[item][0])
    },
    getHeights(){
      // if(this.heights.length>0){
      //   return false 
      // }
    // console.log(this.$refs)
      let heights=[]
      for (const key in this.$refs) {
         if(key!=='ul'){

           heights.push(this.$refs[key][0].offsetTop)
         }
      }
      // console.log(heights)
      return  heights
    },
    initBs(){
      this.bs=new BS('.wrapper',{probeType:3,click:true})
      // 添加滚动监听
      this.bs.on('scroll',(pos)=>{
        let scrollY=Math.abs(pos.y)
        // 获取歌手分组的的高度数组
        let heights=this.getHeights()
        let scrollIndex=0
        for (let index = 0; index < heights.length; index++) {
             if(scrollY>=heights[index]&&scrollY<heights[index+1]){
              //  正常判断  移动的距离要大于前一个高度 并且小于后一个高度
               scrollIndex=index
             }else if (scrollY>=heights[heights.length-1]){
              //最后一个数据 只有前面一个高度判断没有index+1 单独进行处理
              // 判断距离大于最后一个 直接属于最后一个
               scrollIndex=heights.length-1
             }   
        }
        this.selIndex=this.fIndexList[scrollIndex]
        // console.log('滚动的下标',scrollIndex)
      })
    }
  },
  created(){
    getSingerList().then((res)=>{
      this.singers=getData(res.data.list)
      this.initBs()
      console.log(this.$refs)
      })
  }
}
/*
1.显示歌手列表 v
[{index:a,list:[{a1},{a2},{a3}]}
 {index:b,list:[{b1},{b2},{b3}]}
]
2.显示索引列表 v
3.歌手列表滚动 v
4.歌手列表滚动控制索引列表v
5.索引列表点击控制歌手列表 v
  a.点击高亮
  b.控制滚动
6.索引列表滑动控制歌手列表
[a,b,c...]
a  200  b 200   c 200
arr=[0,200,400,600]  
   arr[i]<10<arr[i+1]    0
          210            1

*/ 
</script>
<style lang="less" scoped>
@import '~style/index.less';
.singer{
  position: relative;
  .wrapper{
    .content{
      position: relative;
    }
     overflow: hidden;
     .w(375);
     .fixed(88px,0,0,0);
     .singerItem{
       height: 80px;
       img{
         width: 60px;
         height: 60px;
       }
     }
  }
  .findexList{
    position: absolute;
    right: 5px;
    top:0px;
    background: @black;
    transform: translate3d(0,20%,0);
    li{
      color:@white_o5;
      font-size: @fs-xs;
      width: 20px;
      height: 20px;
    }
    .sel{
      color: @yellow;
    }
  }
}  
</style>
