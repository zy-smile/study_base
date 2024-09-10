const http = require('http')

// 创建一个服务器
http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain;charset=utf-8'
  })
  res.end('hello world,你好，世界')
}).listen(3000)
console.log('服务器运行在3000端口')