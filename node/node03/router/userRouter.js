const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const qs=require('querystring')
router.get('/reg',(req,res)=>{
  let {us,ps}=req.query 
  console.log(us,ps)
  // us=123&ps=456
  fs.appendFileSync(path.join(__dirname,'./user.txt'),`us=${us}&ps=${ps}%`)
  res.send('ok')
})


router.get('/login',(req,res)=>{
  let {us,ps}=req.query 

  let string=fs.readFileSync(path.join(__dirname,'./user.txt')).toString()
  let  users=string.split('%')  //保存所有用户信息的数组
  console.log(users)
  let  info =qs.stringify({us:us,ps:ps})
  // 用户调用登录接口传递的信息
  console.log(info)
  if(users.indexOf(info)===-1){
    res.send('login no ok')
  }else{
    res.send('login ok')
  }
  // let useObj=qs.parse(string)
  // console.log(useObj)
  // if(useObj.us===us&&useObj.ps===ps){
  //   res.send('login ok')
  // }else{
  //   res.send('login no ok ')
  // }
 
})
module.exports = router