const express = require('express')
const app= express()
const multer = require('multer')
const upload = multer({})
const path = require('path')
const fs =require('fs')
app.use('/public',express.static(path.join(__dirname,'./public')))

app.post('/img',upload.single('hehe'),(req,res)=>{
  console.log(req.file)
  let {buffer,originalname} = req.file 
  let extName=originalname.split('.')[1]
  // 类型限制 
  let imgs=['jpg','gif','png']
  if(imgs.indexOf(extName)===-1){
    return res.send({err:-1,msg:'类型错误'})
  }
  let fileName= (new Date()).getTime()+'-'+parseInt(Math.random()*236482648246)+'-'+parseInt(Math.random()*236482648246)
  let imgPath=`/public/${fileName}.${extName}`
  fs.writeFile(path.join(__dirname,'./public',`${fileName}.${extName}`),buffer,(err)=>{
    if(err){

    }else{
      res.send({err:0,msg:'上传ok',path:imgPath})
    }
  })
})
/*
1.文件覆盖  v
2.类型保持和原来一直 v
3.类型限制 
4.尺寸限制
*/ 
app.listen(3000,()=>{
  console.log('server start')
})