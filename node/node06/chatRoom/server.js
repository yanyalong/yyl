const express = require('express')
const app =express()
const ws = require('./ws')
const path = require('path')
app.use('/',express.static(path.join(__dirname,'./public')))
app.get('/reward',(req,res)=>{
  ws.sendAll()
})
app.listen(3003,()=>{
  console.log('server start')
})