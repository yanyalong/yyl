// 创建连接对象
// 连接成功的事件
// 关闭连接的事件
// 接受消息的事件
// 发送消息
const WebSocket= require('ws')
const ws = new WebSocket.Server({port:8888})
// 有客户端连接的时候触发
// client 客户端对象
let clients={}
ws.on('connection',(client)=>{
 
  client.on('message',(data)=>{
    console.log('客户端:',data)
    let {type,name,msg} =JSON.parse(data)
    if(type==='login'){
      //登录保存数据对象
      clients[name]=client 
    }else if(type==='msg'){
     // 聊天将消息发送给其他人
     sendAll(name,msg)
    }
  
    // 储存可客户端对象
  })
  client.on('close',()=>{
    console.log('客户端主动断开连接')
  })
})

function sendAll(name,msg){
// name 消息的来源者
 for (const key in clients) {
    if(key!==name){
    clients[key].send(`${name}:${msg}`)
    }
 }
}
module.exports={sendAll}
