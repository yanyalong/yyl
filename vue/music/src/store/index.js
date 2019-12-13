import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    songList:[] ,//当前正在播放的歌曲列表
    fullScreen:true,//是不是充满屏幕
    currentSongIndex:-1, //当前在放那首歌
    loop:0  //0不循环 1 单曲 2 列表 3 随机
  },
  mutations:{
    changeLoopMode(state,mode){
      state.loop=mode
    },
    addSongList(state,list){
     state.songList = list
    },
    changeFullScreen(state,bool){
      state.fullScreen=bool
    },
    changeCurrentSongIndex(state,index){
      state.currentSongIndex=index
    }
  },
  getters:{
    currentSong(state){
      return state.songList[state.currentSongIndex]
    }
  }

})
export default store