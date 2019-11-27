const request = require('request')
const fs = require('fs')
const path = require('path')
// 1.通过网络请求获取图片数据
// 2.将图片数据写入到本地
let url='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1539066767,1265281029&fm=26&gp=0.jpg'
// request(url,(err,response,body)=>{
//    fs.writeFile(path.join(__dirname,'./fj.jpg'),body,{encoding:'utf8'},(err)=>{
//      console.log(err)
//    })
// })
 request(url).pipe(fs.createWriteStream('./fj.jpg'))