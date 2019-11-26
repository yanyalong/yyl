const express = require('express')
const app  = express()  //实例化express 


// 
const userRouter= require('./userRouter')
const foodRouter = require('./foodRouter')
app.use('/user',userRouter)
app.use('/food',foodRouter)
// app.get('/food/add')
// app.get('/food/del')
// /hehe /login
app.listen(8888,()=>{
  console.log('服务器 启动')
})