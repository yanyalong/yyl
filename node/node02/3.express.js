const express = require('express')
const app  = express()  //实例化express 

// post 数据的解析
var bodyParser = require('body-parser')
// json  表单 x-wwww-form-urlencode  formdata
//解析post 的表单格式
app.use(bodyParser.urlencoded({ extended: false }))
// 解析post 的json格式
app.use(bodyParser.json())


// get接口
app.get('/hehe/xixi/login',(req,res)=>{
   console.log('执行登录')
   console.log(req.query)
  //  接受前端传递的参数 get方式通过req.query接受
   let us = req.query.us 
   let ps  = req.query.ps
   if(us=='wangyi'&&ps=='123'){
     console.log('登录ok')
     res.send('登录ok')
    // 向前端返回数据

   }else{
     console.log('登录no ok')
     res.send('登录失败')
   }
})

// post 接口
app.post('/post/test',(req,res)=>{
  // 1.接受数据
  let data = req.body 
  // 2.处理数据
  console.log(data)
  // 3.返回数据
  res.send('呵呵哒')
})
// http://localhost:8888/hehe/xixi/login  get 
app.listen(8888,()=>{
  console.log('服务器 启动')
})