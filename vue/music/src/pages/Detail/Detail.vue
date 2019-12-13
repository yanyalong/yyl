<template>
  <div class='detail'>
    <span @click='back'>back</span>
    <h3>{{name}}</h3>
    <img :src="img" alt="" width="60">
    <ul>
      <li v-for='(item,index) in list' :key='index'
          @click="goPlay(index)"
      >
        <p>{{item.songname}}</p>
        <p>
          <span v-for='(sItem,sIndex) in item.singer' :key='sIndex'>{{sItem.name}}</span>
          {{item.albumname}}
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import {getSongListByMid,getSongPurl} from 'api/singer.js'
import {getAvator,getAlbum} from 'pages/Singer/singer.js'
import {mapMutations} from 'vuex'
export default {
  data(){
    return {
      name:'',
      img:'',
      list:[]
    }
  },
  methods:{
    ...mapMutations(['addSongList','changeCurrentSongIndex','changeFullScreen']),
    goPlay(index){
      // 将当前的歌单信息添加到vuex里
      this.addSongList(this.list)
      this.changeCurrentSongIndex(index)
      this.changeFullScreen(true)
    },
    back(){
      this.$router.go(-1)
    },
    getSongData(list){
      console.log(list)
      let arr=list.map((item,index)=>{
        let {albumdesc,albummid,albumname,singer,songmid,songname,interval}=item.musicData
        let albumUrl=getAlbum(albummid)
        // 根据id 获取图片
        return  {albumdesc,albummid,albumname,singer,songmid,songname,albumUrl,interval}
      })
      return arr
    }
  },
  created(){
    let {mid}=this.$route.params
    console.log(this.$route.params)
    getSongListByMid(mid).then((res)=>{
      console.log(res)
      
      this.name=res.data.singer_name
      this.img=getAvator(res.data.singer_mid)
      let list=this.getSongData(res.data.list)
      // 获取真实的url
      getSongPurl(list).then((res)=>{
        this.list=res
      })
    })
  }
}
</script>
<style lang="less" scoped>
  @import '~style/index.less';
  .detail{
    .fixed(0,0,0,0);
    background: red;
  }
</style>