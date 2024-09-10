const http = require('http');
const url = require('url')
const server = http.createServer((req, res) => {
  const url = req.url;
  const query = url.split('?')[1];
  const params = new URLSearchParams(query);
  const name = params.get('name');
  const age = params.get('age');

  res.writeHead(200, {
    'Content-Type': 'text/plain;charset=utf-8'
  })
  res.end(`name: ${name}, age: ${age}`);
});
server.listen(3000)
console.log('服务器启动3000')