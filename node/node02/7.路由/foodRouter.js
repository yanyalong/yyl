const  express = require('express')
const router = express.Router()

router.get('/add',(req,res)=>{
  res.send('food add  ok')
})

router.post('/del',(req,res)=>{
  res.send('food del ok')
})


module.exports = router