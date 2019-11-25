const fs  = require('fs')
// curd
// 创建文件  覆盖写入
// fs.writeFile('./haha/demo.txt','呵呵哒',(err)=>{
//   console.log(err)
// })
//更新文件的内容  追加写入
// fs.appendFile('./haha/demo.txt','第二次',(err)=>{
//   console.log(err)
// })
// 读取文件内容
// fs.readFile('./haha/demo.txt',(err,msg)=>{
//   console.log(err)
//   // 读取文件默认是二进制数据流 buffer 需要toString 转化成utf8
//   console.log(msg.toString())
// })
// fs.unlink('./haha/demo.txt',(err)=>{
//   console.log(err)
// })
// 判断文件状态
fs.stat('./haha',(err,state)=>{
  console.log(err)
  // console.log(state.isFile())
  console.log(state.isDirectory())
})



// 作业  打印目录树
// fs.readdir('./',(err,info)=>{
//   console.log(info)
// })
// 1.读取文件夹内容
// 2.打印输出 
    //  a.文件直接打印
    //  b.文件夹
// 递归