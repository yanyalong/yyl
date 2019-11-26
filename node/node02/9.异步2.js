/*
js是单线程  防止被阻塞  node中奖所有的i/0变成异步
          |
          v
异步过多嵌套会形成回调地狱
          |
          v
promise 的链式调用解决回调地狱    
          |
          v
es7  async await     修饰词


*/ 
//async 可以修饰一个函数 被修饰的函数会返回promise对象
// async 处理的函数 返回值可以有也可以没有 返回的数据就是then 接受的数据 不返回数据相当于return  undefined
// 函数内部出现错误或者主动throw 抛出一个错误 走catch
// await  用户来promise对象  只能在async 函数内部使用 将promise 变成同步
// async function test(){
//   throw '你那里错了'
//   // return false
// }
// // let result = test()
// // console.log(result)
// test()
// .then((data)=>{
//  console.log('then',data)
// })
// .catch((err)=>{
//   console.log('err',err)
// })

// 求和操作

function num1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(1)
    },1000)
  })
}

function num2(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(2)
    },500)
  })
}
// let  sum=0
// num1()
// .then((num)=>{
//   sum+=num
//   return num2()
// })
// .then((num)=>{
//   sum+=num 
//   console.log(sum)
// })

async function sum(){
  let res1=await num1()
  let res2=await num2() 
  return res1+res2
}
sum()
.then((data)=>{
  console.log(data)
})
