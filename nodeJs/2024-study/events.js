const events = require('events')

// 创建一个事件实例对象
const eventEmitter = new events.EventEmitter()

function listener1() {
  console.log('连接成功')
}
eventEmitter.addListener('connection', listener1)
eventEmitter.on('connection', listener1)
console.log(eventEmitter.listenerCount('connection'))
eventEmitter.removeListener('connection', listener1)
eventEmitter.emit('connection')