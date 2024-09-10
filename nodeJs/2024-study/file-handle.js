const fs = require('fs')

// 异步读取
// fs.readFile('./statics/file.txt', 'utf8', (err, data) => {
//   if (err) throw err
//   console.log(data)
// })
// console.log('结束')


// 同步读取
// const data = fs.readFileSync('./statics/file.txt')
// console.log(data.toString())
// console.log('同步结束')

// 异步写入
// const data = 'hello world'
// fs.writeFile('./statics/file.txt', data, (err) => {
//   if (err) throw err
//   console.log('写入成功')
// })

// 打开文件
fs.open('./statics/file.txt', (err, data) => {
  if (err) throw err
  console.log('打开成功')
})