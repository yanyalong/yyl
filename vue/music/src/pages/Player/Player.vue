<template>
  <div class="player" v-if='songList.length'>
    <div class='big' v-if='fullScreen'>
       <button @click='changeFullScreen(false)'>小小小</button>
       {{currentSong}}
    </div>
    <div class='small' v-else @click="changeFullScreen(true)">

    </div>
  </div>
</template>

<script>

import {mapState,mapMutations, mapGetters} from 'vuex'
export default {
  computed:{
    ...mapState(['songList','fullScreen']),
    ...mapGetters(['currentSong'])
  },
  methods:{
    ...mapMutations(['changeFullScreen'])
  }
}
</script>
<style lang="less" scoped>
@import '~style/index.less';
.player{
  .big{
    .fixed(0,0,0,0);
    background: red;
  }
  .small{
    position: fixed;
    bottom: 0;
    height: 80px;
    .w(375);
    background: blue;
  }
}  
</style>
