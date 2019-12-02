// 创建连接对象
// 连接成功的事件
// 关闭连接的事件
// 接受消息的事件
// 发送消息
const WebSocket= require('ws')
const ws = new WebSocket.Server({port:8888})
// 有客户端连接的时候触发
// client 客户端对象
let clients=[]
ws.on('connection',(client)=>{
 
  client.on('message',(msg)=>{
    console.log(msg)
  })
  client.on('close',()=>{
    console.log('客户端主动断开连接')
  })
})

function sendAll(){
  // 循环客户端对象
  clients.map((item,index)=>{
    let msg ='谢谢惠顾'
    if(index%9>=5){
      msg='恭喜中奖'
    }
    item.send(msg)
  })
}
module.exports={sendAll}
