
const nodemailer = require("nodemailer");
// "QQ": {
//   "domains": ["qq.com"],
//   "host": "smtp.qq.com",
//   "port": 465,
//   "secure": true
// },
//  创建邮件的发送对象
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '352186537@qq.com', // 邮箱账号
      pass: 'xkdkiwrxxbpnbhhb' // 邮箱smtp验证码
    }
  });
 let img='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574676855352&di=af619ea971a2d91d18a36b2026faf5bd&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20120614%2FImg345602334.jpg'
 //创建邮件内容
 let info={
    from: '"Fred Foo 👻" <352186537@qq.com>', // sender address
    to: "352186537@qq.com", // list of receivers
    subject: "1923🙃哒 ✔", // Subject line
    // text: "Hello world?", // plain text body
    html: `<div>
              <h3>欢迎注册</h3>
              <img src='${img}'>
          </div>` // html body
  }
  // 通过邮件对象的send 方法发送邮件
  // setInterval(()=>{
    transporter.sendMail(info,(err,info)=>{
      console.log(err)
      console.log(info)
    })
  // },1000)
 
