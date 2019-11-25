// 文件夹操作
const fs = require('fs')
// 创建文件夹
// node中把所有的i/o 阻塞操作变成了异步
console.log(1)
// fs.mkdir('./hehe',(err)=>{
//   console.log(2,err)
// })
let reusult = fs.mkdirSync('./xixi')
console.log(reusult)
console.log(3)

