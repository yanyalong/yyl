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
          @ended='onended'
          @canplay="oncanplay"
          @timeupdate='timeUpdate'
         ></audio>
       <!-- {{currentSong}} -->
       <br>
       <br>
       <br>
       <!--进度条条 -->
       <my-progress 
        :startTime='currentTime' 
        :endTime='currentSong.interval'
        @changeTime='changeMusicTime'
        >
       </my-progress>
       <!-- 歌词 -->
       {{lyricTxt}}
       <!-- 控制栏 -->
       <button @click='playMusic'>{{this.isPlay?"stop":"play"}}</button>
       <button @click='next'>next</button>
       <button @click='changeMusicTime(100)'>jump</button>
       <select v-model='mode'>
         <option value=0>不循环</option>
         <option value=1>单曲循环</option>
         <option value=2>列表循环</option>
         <option value=3>随机循环</option>
       </select>
    </div>
    <div class='small' v-else @click="changeFullScreen(true)">

    </div>
  </div>
</template>

<script>

import {mapState,mapMutations, mapGetters} from 'vuex'
import {getSongPurl,getLyricByMid} from 'api/singer.js'
import myProgress from  'components/my-progress'
import {Base64} from 'js-base64'
import LyricParser from 'lyric-parser' 
export default {
  components:{myProgress},
  data(){
    return {
      isPlay:false,
      mode:this.loop||0,
      currentTime:0,
      lyricTxt:'暂无数据'
    }
  },

  computed:{
    ...mapState(['songList','fullScreen','currentSongIndex','loop']),
    ...mapGetters(['currentSong']),
    cdStyle(){
      // 控制转圈
      return this.isPlay?'cdplay':'cdplay paused'
    }
  },
  methods:{
    ...mapMutations(['changeFullScreen','changeCurrentSongIndex','changeLoopMode']),
    playMusic(){
      this.audio = this.$refs.audio
      console.log(this.audio.__proto__)
      // 当前的暂停状态
      if(this.audio.paused){
         this.audio.play()
      }else{
        this.audio.pause()
      }
      this.lyricObj.togglePlay()
     
    },
    next(){
      let index=this.currentSongIndex+1
      this.changeMusic(index)
    },
    changeMusic(index){
      // 
      console.log('changeMusic')
      this.changeCurrentSongIndex(index)
    },
    oncanplay(){
      console.log('歌曲下载完毕可以播放')
      this.audio.play()
      // 歌词播放 
      // 避免歌曲能播放的时候歌词还没获取到
      if(!this.lyricObj ) return false 
      // this.lyricObj.togglePlay()
    },
    changeMusicTime(time,state){
      // state 为真歌词  音乐都改变
      // state 为假只改变歌词
      if(state){
        // 修改播放时间
      this.audio.currentTime=time
      }
      // 修改歌词的时间
      this.lyricObj.seek(time*1000)
    },
    timeUpdate(e){
      // console.log('播放时间改变',e.target.currentTime)
      this.currentTime=e.target.currentTime
    },
    onended(){
      console.log('放完了',this.loop ,typeof this.loop)
      switch (Number(this.loop)) {
        case 2:
          this.next()
          break;
        case 3:
          let rand=parseInt((Math.random()*this.songList.length))
          console.log('随机下一曲下标',rand)
          this.changeMusic(rand)
            break;
        case 1:
          this.audio.play()
            break;
        default:
          break;
      }

    },
    onplaying(){
      console.log('正在播放')
      this.isPlay=true

    },
    onpause(){
      this.isPlay=false

    }
  },
  watch:{
    mode(newValue,oldValue){
      console.log('播放模式',newValue)
      this.changeLoopMode(newValue)
    },
    currentSong(newSong,oldSong){
      console.log('歌曲改变',this.audio)
      //在歌曲发生改变的时候将 audio元素挂到组件上
      // watch获取之前的dom数据 目标是获取更新之后的
      this.$nextTick(()=>{
        if(!this.audio){
        this.audio=this.$refs.audio
        }
        console.log(this.audio)
      })
      // 先将之前的歌词停止
      if(this.lyricObj){
        this.lyricObj.stop()
        this.lyricObj=null
      }
      let mid=newSong.songmid 
      getLyricByMid(mid)
      .then((res)=>{
        let string=Base64.decode(res.lyric)
        console.log('歌词',string)
        // 将歌词转化为lyric 解析对象
        this.lyricObj=new LyricParser(string,(line)=>{
          console.log('歌词播放的时候触发line',line.txt)
          this.lyricTxt=line.txt
        })
        this.lyricObj.play()
        // console.log(this.lyricObj)
      })
      
      
    }
  },
  created(){
    // 在组建创建的时候已经执行

  }
}
/*
1.头部 歌名 歌手  缩小按钮 v
2.背景随动 
3.cd  
  获取地址
  可转可停
6.控制器
  播放
  上一曲
  下一曲
  播放模式  
  单曲循环  放完了 在放一次 
  列表循环  放完了 放下一曲
  随机循环  放完了 随机
  单曲播放  放完了 停止
5.进度条 
  1.显示当前时间 和总时间 v
  2.随这播放 时间 进度条会动 v
  3. 手动拖动进度条 歌曲播放也会改变
4.歌词
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
      .w(375);
      // background: blue;
      display: flex;
      justify-content: center;
      margin: 20px auto;
      // border: 10px solid #
       img{
         border: 10px solid #eee;
         border-radius:50%; 
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
