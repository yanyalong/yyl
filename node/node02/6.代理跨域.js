const express = require('express')
const app  = express()  //实例化express 
const cors = require('cors')
const  request = require('request') 
app.use(cors())
// 通过cors 来解决express跨域
app.get('/test',(req,res)=>{

  // 发起服务器端请求
  let url='http://ustbhuangyi.com/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.03860120327310179'
  request(url,(err,response,body)=>{
    console.log(body)
    res.send(body)
  })
  
})

app.listen(8888,()=>{
  console.log('服务器 启动')
})