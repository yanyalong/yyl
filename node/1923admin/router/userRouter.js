const express = require('express')
const router = express.Router()
const  User = require('../db/model/userModel')
const Mail=require('../utils/mail')
let codes={} //保存邮箱和验证码

//引入和用户表相关的数据模型
/*
1.验证用户发送的验证码 和服务器保存的是否一致
*/ 
router.get('/reg',(req,res)=>{
   let {us,ps,code} = req.query 
   //用户的账号 us 就是邮箱 
   //验证用户发送的验证码是否一致
   console.log(codes)
   console.log(us,code)
   if(codes[us]!=code){
    return res.send({err:-2,msg:'验证码错误'})
   }
   
   
   User.insertMany({us,ps})
   .then((data)=>{
    res.send({err:0,msg:'注册ok'})
   })

})

router.get('/login',(req,res)=>{
  let {us,ps}=req.query 
  User.find({us,ps})
  .then((data)=>{
     if(data.length>=1){
       res.send({err:0,msg:'登录ok'})
     }else{
       res.send({err:-1,msg:'登录失败'})
     }
  })
})

/*获取验证码
1.接受用户的参数 要发送验证码的邮箱或者手机号 
2.产生一个随机验证码
3.将手机号邮箱 与验证码进行保存
4.将验证码发送给用户
*/ 
router.get('/getCode',(req,res)=>{
  let {mail}= req.query 
  let code =parseInt(Math.random()*9999)
  Mail.sendMail(mail,code)
  .then((data)=>{
    // 验证发送成功之后再保存
    codes[mail]=code
    res.send(data)
  })
  .catch((err)=>{
   res.send(err)
  })
})

module.exports = router