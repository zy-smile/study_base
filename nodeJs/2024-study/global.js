var info = 123
console.log(__filename)

console.log(__dirname)

console.time('test')


setTimeout(() => {
  console.timeEnd('test')
}, 1000)