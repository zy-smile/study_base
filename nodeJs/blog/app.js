//创建服务器
const express = require('express');
const cors = require("cors")
const app = express();

app.use(cors())

app.use(express.json())
// 导入数据库
require('./model/connect');

// //开放静态资源访问
// app.use(express.static(path.join(__dirname,'public')));
const home = require('./route/home')
app.use('/home',home)
app.listen(3000);
console.log('网站服务器创建成功');
