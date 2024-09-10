const http = require('http');
const fs = require('fs');
const url = require('url')
const util = require('util');

http.createServer((req, res) => {
  let newUrl = url.parse(req.url);
  console.log(util.inspect(newUrl))
  if (newUrl.pathname === '/') {
    fs.readFile('./statics/index.html', (err, data) => {
      res.end(data);
    })
  } else if (url === '/index.html') {
    fs.readFile('./statics/index.html', (err, data) => {
      res.end(data);
    })
  } else {
    res.end('404')
  }
}).listen(3000);