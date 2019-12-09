<template>
    <ul class='my-tab'>
      <router-link 
        tag='li'
        v-for='(item,index) in tab'
        :key='index'
        :to='item.path'
        active-class="sel"
      >
       <span>{{item.name}}</span>
      </router-link>
    </ul>

</template>

<script>
export default {
   data(){
     return{
       tab:[{name:'推荐',path:'/recommend'},
       {name:'歌手',path:'/singer'},
       {name:'排行',path:'/rank'},
       {name:'搜索',path:'/search'}]
     }
   }
}
</script>
<style scoped lang="less">
//样式中使用别名+‘~’
@import  '~style/index.less';
.my-tab{
  display: flex;
  .w(375);
  height: 44px;
  background: @black;
  color:@white_o5;
  font-size: @fs-s;
  li{
    width: 25%;
    text-align: center;
    line-height: 44px;
    span{
      border-bottom: 1px solid  @black; 
    }
  }
  .sel{
    color: @yellow;
    span{
       border-bottom: 1px solid  @yellow; 
    }
  }

}

</style>
