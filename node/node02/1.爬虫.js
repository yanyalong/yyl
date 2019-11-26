//发起服务端请求 请求一个网页 内置模块 http  第三方 request  axios ...
const request = require('request')
const  fs= require('fs')
const path= require('path') 
const cheerio = require('cheerio')
let url ='https://www.qunar.com/'
request(url,(err,response,body)=>{
 console.log(err)
 console.log('--------------')
//  console.log(response)
 console.log('--------------')
//  console.log(body)
  // fs.writeFile(path.join(__dirname,'./baidu.html'),body,(err)=>{
  //   if(err){
  //     console.log('爬取失败')
  //   }else{
  //     console.log('爬取ok')
  //   }
  // })
  //  将爬取的网页进行处理
  let $=cheerio.load(body)
  $('.lab').each((index,el)=>{
    console.log(index)
    console.log($(el).text())
  })
})

//图片的地址

//根据一个网址 下载对应的网页文件