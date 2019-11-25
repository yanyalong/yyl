// 文件夹操作
const fs = require('fs')
// 创建文件夹
// node中把所有的i/o 阻塞操作变成了异步
// console.log(1)
// fs.mkdir('./hehe',(err)=>{
//   console.log(2,err)
// })
// let reusult = fs.mkdirSync('./xixi')
// console.log(reusult)
// console.log(3)

// 读取一个文件夹内容  错误的回调优先
// fs.readdir('./hehe',(err,info )=>{
//   // err null   obj里面包含了错误信息  err为真操作失败  为假 操作ok
//   if(err){
//     console.log('读取错误')
//   }else{
//     console.log('读取ok')
//   }
// })
// console.log(1)
// try {
//   fs.readdirSync('./hehe')
// } catch (error) {
//   console.log('出错了',error)
// }

// console.log(2)
// let info = fs.readdirSync('./')
// console.log(info)
// 删除文件夹
// fs.rmdir('./hehe',(err)=>{
//  console.log(err)
// })
fs.rename('./xixi','haha',(err)=>{
  console.log(err)
})