// 和推荐相关的接口处理
import  axios from  'utils/axios.js'
import jsonp from  'jsonp'
// 获取推荐的banner数据
export const getSingerList=()=>{
  return new Promise((resolve,reject)=>{
    let url='https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq'
    // &jsonpCallback=jp0
    jsonp(url,{param:'jsonpCallback'},(err,data)=>{
       if(err){ reject(err)}
       else{ resolve(data)}
    })
  })
}
// 根据歌手mid 获取歌单

export const getSongListByMid=(mid='002J4UUk29y8BY')=>{
  return  new Promise((resolve,reject)=>{
    let url=`https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&hostUin=0&needNewCode=0&platform=yqq&order=listen&begin=0&num=80&songstatus=1&singermid=${mid}`
    jsonp(url,{param:'jsonpCallback'},(err,data)=>{
      if(err){ reject(err)}
      else{ resolve(data)}

   })
  })
}


// 根据songmid获取播放的真实url（purl）
export const getSongPurl=(list)=>{
  console.log('获取真实url的接口',list)
  return  new Promise((resolve,reject)=>{
  let mids=[]
  let types=[]
  list.map((item,index)=>{
    mids.push(item.songmid)
    types.push(0)
    return item
  })
  console.log(mids,types)
  let root='http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/'
  let url='/xixi/cgi-bin/musicu.fcg'
  let data={
    "-":"getplaysongvkey9362879388627472",
    "g_tk": 5381,
    "loginUin": 0,
    "hostUin": 0,
    "format": "json",
    "inCharset": "utf8",
    "outCharset": "utf-8",
    "notice": 0,
    "platform": "yqq.json",
    "needNewCode": 0,
    "data":`{"req":{"module":"CDN.SrfCdnDispatchServer","method":"GetCdnDispatch","param":{"guid":"909025638","calltype":0,"userip":""}},"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"909025638","songmid":${JSON.stringify(mids)},"songtype":${JSON.stringify(types)},"uin":"0","loginflag":1,"platform":"20"}},"comm":{"uin":0,"format":"json","ct":24,"cv":0}}`
  }
   axios.get(url,{params:data})
   .then((data)=>{
     let result=list.filter((item,index)=>{
      //   将不能获取真实url的数据过滤掉
       item.purl=root+data.req_0.data.midurlinfo[index].purl
       if( item.purl===root){
        return false
       }
       return true
     })
      resolve(result)
   })
  })
}

// 根据歌曲mid 获取歌词信息

export const getLyricByMid=(mid='002J4UUk29y8BY')=>{
  return new Promise((resolve,reject)=>{
    let url =`/hy/music/api/lyric?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&songmid=${mid}&platform=yqq&hostUin=0&needNewCode=0&categoryId=10000000&pcachetime=1576287332923`
    axios.get(url)
    .then((data)=>{
      resolve(data)
    })
  })
}