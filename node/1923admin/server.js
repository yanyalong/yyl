const express = require('express')
const db = require('./db/connect')
// 启动服务器的同时连接数据库
const app = express()


// 路由分发

const UserRouter = require('./router/userRouter')
const FoodRouter = require('./router/foodRouter')
app.use('/admin/user',UserRouter)
app.use('/admin/food',FoodRouter)

app.listen(3000,()=>{
  console.log('服务器启动')
})