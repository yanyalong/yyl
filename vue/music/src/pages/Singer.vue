<template>
  <div class="home">
    歌手
  </div>
</template>

<script>

import jsonp from 'jsonp'
export default {
  created(){
    let url='https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq'
    // &jsonpCallback=jp0
    jsonp(url,{param:'jsonpCallback'},(err,data)=>{
      console.log(data)
    })
  }
}
</script>
