const fs = require('fs')
const path = require('path')
// ./ 指的是node执行执行目录
fs.readdir(path.join(__dirname,'./haha'),(err,infos)=>{
  console.log(err)
  console.log(infos)
})
// 涉及到目录使用的是绝对路径
// console.log(__dirname)
// 当前文件所在的文件夹的绝对路径 和执行目录无关
// /Users/apple/Desktop/1923/node/node01
// /Users/apple/Desktop/1923/node/node01
// let result = path.join(__dirname,'../','./haha')
// path.join 可以将参数的路径拼接到一块
// console.log(result)