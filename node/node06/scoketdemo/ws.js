// 创建连接对象
// 连接成功的事件
// 关闭连接的事件
// 接受消息的事件
// 发送消息
const WebSocket= require('ws')
const ws = new WebSocket.Server({port:8888})
// 有客户端连接的时候触发
// client 客户端对象
ws.on('connection',(client)=>{
  console.log('客户端连接')
  client.on('close',()=>{
    console.log('前端主动断开连接')
  })
  // 服务发送消息
  client.send('欢迎光临 鱼塘')
  // 接受消息
  client.on('message',(msg)=>{
    console.log('来自前端的留言',msg)
  })
})

