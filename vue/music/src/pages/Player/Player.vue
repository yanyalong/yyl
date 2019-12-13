<template>
  <div class="player" v-if='songList.length'>
    <div class='big' v-if='fullScreen'>
      <div>
        <button @click='changeFullScreen(false)'>小小小</button>
        <h4>{{currentSong.songname}}</h4>
        <p><span v-for='(item,index) in currentSong.singer'
            :key='index'
          >{{item.name}}</span></p>
        <!--cd -->
        <div class='cd-wrapper'>
           <img :src="currentSong.albumUrl" :class='cdStyle' alt="">
        </div>
      </div>
       <!-- audio -->
       <audio  ref='audio' 
          :src="currentSong.purl"
          @playing="onplaying"
          @pause='onpause'
         controls></audio>
       <!-- {{currentSong}} -->
       <!--进度条条 -->
       <!-- 歌词 -->
       <!-- 控制栏 -->
       <button @click='playMusic'>{{this.isPlay?"stop":"play"}}</button>
       <button @click='next'>next</button>
    </div>
    <div class='small' v-else @click="changeFullScreen(true)">

    </div>
  </div>
</template>

<script>

import {mapState,mapMutations, mapGetters} from 'vuex'
import {getSongPurl} from 'api/singer.js'
export default {
  data(){
    return {
      isPlay:false
    }
  },

  computed:{
    ...mapState(['songList','fullScreen','currentSongIndex']),
    ...mapGetters(['currentSong']),
    cdStyle(){
      // 控制转圈
      return this.isPlay?'cdplay':'cdplay paused'
    }
  },
  methods:{
    ...mapMutations(['changeFullScreen','changeCurrentSongIndex']),
    playMusic(){
      this.audio = this.$refs.audio
      console.log(this.audio.__proto__)
      // 当前的暂停状态
      if(this.audio.paused){
         this.audio.play()
      }else{
        this.audio.pause()
      }
     
    },
    next(){
      let index=this.currentSongIndex+1
      this.changeCurrentSongIndex(index)
    },
    onplaying(){
      console.log('正在播放')
      this.isPlay=true
    },
    onpause(){
      this.isPlay=false
    }
  },
  created(){
    getSongPurl()
  }
}
/*
1.头部 歌名 歌手  缩小按钮 v
2.背景随动 
3.cd  
  获取地址
  可转可停
6.控制器
4.歌词
5.进度条
*/ 
</script>
<style lang="less" scoped>
@import '~style/index.less';
.player{
  font-size: @fs-m;
  .big{
    .fixed(0,0,0,0);
    background: red;
    // cd 
    .cd-wrapper{
       img{

       }
       & .cdplay{
        animation: rotate 10s linear infinite; 
       }
       & .paused{
         animation-play-state: paused;
       }
    }
  }
  .small{
    position: fixed;
    bottom: 0;
    height: 80px;
    .w(375);
    background: blue;
  }
 
}  
@keyframes rotate {
    0%{
      transform: rotate(0deg)
    }
    100%{
      transform: rotate(360deg)
    }
}
</style>
