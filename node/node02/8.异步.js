setTimeout(()=>{
  console.log(1)
})
new Promise((resolve,reject)=>{
  console.log(2)
  resolve()
})
.then(()=>{
  console.log(3)
})
new Promise((resolve,reject)=>{
  console.log(4)
  resolve()
})
.then(()=>{
  console.log(5)
})
setTimeout(()=>{
  console.log(6)
})
console.log(7)
// 宏任务 正常代码执行  setTimeout  setInterval
// 微任务 promise 微任务
// promise 的创建是同步的 then catch 是异步
// 宏任务的异步 和微任务的异步同时都有 优先执行 微任务




