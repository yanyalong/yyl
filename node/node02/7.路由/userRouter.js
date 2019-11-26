const  express = require('express')
// const app =  express()
const router = express.Router() //创建一个路由对象


router.get('/login',(req,res)=>{
  res.send('login ok ')
})

router.post('/reg',(req,res)=>{
  res.send('reg ok ')
})
module.exports = router