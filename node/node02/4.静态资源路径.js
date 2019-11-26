const express = require('express')
const app  = express()  //实例化express 
const path = require('path')
// app.use('/hehe/xixi',express.static(path.join(__dirname,'./public')))
app.use('/',express.static(path.join(__dirname,'./public')))
app.use(express.static(path.join(__dirname,'./public')))
// 第一个参数没有默认是根路径
app.listen(8888,()=>{
  console.log('服务器 启动')
})