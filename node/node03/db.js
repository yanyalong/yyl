var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/1923');
mongoose.connect('mongodb://localhost/1923',{ useNewUrlParser: true,useUnifiedTopology:true });
// 连接本地数据库
var db = mongoose.connection;
// 数据库连接对象
db.on('error',()=>{
  console.log('数据库连接失败')
});
db.on('open', function() {
  console.log('数据库连接成功')
});
// 创建schema对象
let UserSchema=mongoose.Schema({
  us:{type:String,required:true},  // us字段 类型要求字符串  必须
  ps:{type:String,required:true},
  age:{type:Number,default:0},
})
// schema对象 和数据库的集合做关联
//参数1 user 是要关联的数据库集合 mongoose 会自动变成复数
let userModel = mongoose.model('users',UserSchema)
// userModel.find()
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log(err)
// })
userModel.insertMany({us:'网易',ps:'1231312'})
.then((data)=>{
  console.log('then',data)
})
.catch((err)=>{
  console.log('err',err)
})
// userModel.deleteMany({age:0})
// .then((data)=>{
//   console.log('then',data)
// })
// .catch((err)=>{
//   console.log('err',err)
// })
// userModel.updateMany({age:16},{$set:{age:160}})
// .then((data)=>{
//   console.log('then',data)
// })
// .catch((err)=>{
//   console.log('err',err)
// })