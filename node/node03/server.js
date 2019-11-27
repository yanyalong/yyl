const express = require('express')
const app= express()

const UserRouter = require('./router/userRouter')
app.use('/user',UserRouter)

app.listen(3000,()=>{
  console.log('server start')
})