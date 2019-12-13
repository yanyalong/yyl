
export const getAvator=(mid='002J4UUk29y8BY')=>{
  return `https://y.gtimg.cn/music/photo_new/T001R300x300M000${mid}.jpg?max_age=2592000`
}
export const getAlbum=(albummid='003y8dsH2wBHlo')=>{
  return `https://y.gtimg.cn/music/photo_new/T002R300x300M000${albummid}.jpg?max_age=2592000`
}
export const getData=(arrs)=>{
  //  将请求的数据向目标数据转换
    // console.log(arrs)
    let obj={'hot':{title:'hot',list:[]}}
    // 判断数据里的首字母 是否存在
    arrs.map((item,index)=>{
      // 从数据提取必要的参数
      let {Findex,Fsinger_mid,Fsinger_name}=item 
      let singerInfo={Findex,Fsinger_mid,Fsinger_name}
      singerInfo.avator=getAvator(Fsinger_mid)
      // 将前10条数据添加到最热
      if(index<10){
        obj.hot.list.push(singerInfo)
      }
      if(obj[Findex]){
        // 已经有相同首字母的歌手
        obj[Findex].list.push(singerInfo)
      }else{
        // 没有相同首字母歌手
        obj[Findex]={title:Findex,list:[singerInfo]}
      }
      return item
    })
    // console.log(obj)
    // 对象的下标是乱序的  排序处理 -》sort 只能数组用
    // hot 和  h 首字母排序混合 进行分割处理
    let  hot=[]
    let  other=[] 
    // 将对象变成数组
    for (const key in obj) {
      if(key!=='hot'&&key != 9){
        other.push(obj[key])
      }else if(key === 'hot'){
        hot.push(obj[key])
      }
    }
    // 按照首字母的asc码进行字典排序
    let order=other.sort((a,b)=>{ return a.title.charCodeAt()-b.title.charCodeAt()})
    //将hot 与排序后的歌手进行拼接
    let result = hot.concat(order)
    
    return  result
  }