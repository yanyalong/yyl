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

