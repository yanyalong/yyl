const path = require('path')

function resolve(dir){
  return path.join(__dirname,dir)
}
module.exports={
  devServer:{
    proxy:{
       '/hehe':{
         target:'http://ustbhuangyi.com',
         changeOrigin:true,
         pathRewrite:{
           "^/hehe":''
         }
       }
    }
  },
  chainWebpack:(config)=>{
    // 起别名
    config.resolve.alias
    .set('style',resolve('./src/style'))
    .set('pages',resolve('./src/pages'))
  }
}