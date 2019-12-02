const jwt = require('jsonwebtoken')
const playload={
  us:123,
  _id:"sdfsfsf"
}
const screct='sals;fjweoskljfsldkjfldsjfdsjfl'
// 创建一个token
// let token=jwt.sign(playload,screct)
// console.log(token)
let token='1eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cyI6MTIzLCJfaWQiOiJzZGZzZnNmIiwiaWF0IjoxNTc1MjU1OTkxfQ.etKRwMdWyU7rc7LLEM_26-Xdz-mXxPxkyDD5IdCQ9qY'
// 验证token
jwt.verify(token,screct,(err,data)=>{
  console.log(err)
  console.log(data)
})