const express = require('express')
const app  = express()  //实例化express 


app.get('/login',(req,res,next)=>{
  console.log('中间件1')
  let us = req.query.us 
  if(us){
    next()
  }else{
    res.send('用户名不存在')
  }
},(req,res,next)=>{
  console.log('中间件2')
},(req,res)=>{
  console.log('login')
  res.send("login ok")
})
app.listen(8888,()=>{
  console.log('服务器 启动')
})