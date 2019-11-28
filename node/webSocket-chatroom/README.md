## 应用层
http webSocket

http1.1: client  ->>>  server

webScoket: client -> server
           server -> client
全双工双向通信

http2.0: 支持 server-push

## 连接
1. 发送一个http 请求
   后端响应 101 Switching Protocols
   Connection: Upgrade
   Upgrade: websocket
之后由 http 协议升级为 webSocket  后续的发送接收信息都会走 全双工双向通道