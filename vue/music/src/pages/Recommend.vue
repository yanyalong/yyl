<template>
  <div class="recommend">
    <!-- 轮播图 -->

    <!-- 推荐列表 -->
    <div class='wrapper'> 
       <div class='content'>
            <my-banner :slides='banners'></my-banner>
            <ul class='list'>
              <li v-for='(item,index) in list'
                :key='index'

              >
                <img :src="item.imgurl" alt="">
                <div>
                  <h2>{{item.dissname}}</h2>
                  <p>{{item.creator.name}}</p>
                </div>
              </li>
            </ul>
       </div>
    </div>
 
  </div>
</template>

<script>
 import {getBanner,getList} from 'api/recommend.js'
 import myBanner from 'components/my-banner.vue'
 import BS from  'better-scroll'
export default {
  components:{myBanner},
  data () {
    return {
      banners:[],
      list:[]
    }
  },
  methods:{
    initBS(){
      this.bs=new BS('.wrapper',{})
    }
  },
  created(){
     getBanner().then((res)=>{
       this.banners=res.data.slider
     })
     getList().then((res)=>{this.list=res.data.list})
  },
  mounted(){
    this.initBS()
  }
}
</script>
<style lang="less" scoped>
@import '~style/index';
.recommend{
  .wrapper{

    background: black;
    overflow: hidden;
    position: fixed;
    top:88px;
    bottom: 0;
    left: 0;
    right: 0;

    .list{
      li{
        .w(375);
        height: 82px;
        // background: blue;
        padding: 0px 20px 20px 20px;
        box-sizing: border-box;
        display: flex;
        img{
          width: 60px;
          height: 60px;
        }
        div{
          margin-left:20px; 
          // background: red;
          h2{
            color: #fff;
            height: 20px;
            padding-bottom:10px; 
            font-size: @fs-s;
          }
          p{
            color:rgba(255,255,255,.3);
            height: 20px;
            font-size: @fs-s;
          }
        }
      }
    }
  }  

}
</style>
