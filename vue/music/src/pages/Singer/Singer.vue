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
            :key='sindex'>
              <img :src="sItem.avator" alt="">
              {{sItem.Fsinger_name}}
            </li>
          </ol>
        </li>
      </ul>
    </div>
    <!-- 索引列表 -->
    <ul class='findexList'>
      <li v-for='(item,index) in fIndexList' 
        :key='index'
        :class='item===selIndex?"sel":""'
        @click="toggle(item)"
      >
        {{item}}
      </li>
    </ul>
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
    toggle(item) {
      // 索引列表的点击事件
      this.selIndex = item
      console.log(this.$refs)
      // 让better-scroll 具体滚动到某一个元素  
      // 给滚动位置做一个标记可以获取
      this.bs.scrollToElement(this.$refs[item][0])
    },
    initBs(){
      this.bs=new BS('.wrapper',{})
    }
  },
  created(){
    getSingerList().then((res)=>{
      this.singers=getData(res.data.list)
      this.initBs()
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
4.歌手列表滚动控制索引列表
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
     overflow: hidden;
     .w(375);
     .fixed(88px,0,0,0);
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
      height: 18px;
    }
    .sel{
      color: @yellow;
    }
  }
}  
</style>
