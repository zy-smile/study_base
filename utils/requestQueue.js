// 控制请求并发
function requestQueue(requestArr = [], count = 6) {
  let current = 0;

  function request() {
    while (current < count && requestArr.length) {
      current++
      const item = requestArr.shift();
      console.log(item, current)
      item().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        current--;
        request();
      })
    }
  }
  request()
}

let list = []
for (let i = 0; i < 100; i++) {
  list.push(() => fetch(`test/demo/${i}`))
}
// requestQueue(list, 2)

let p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('执行1')
      resolve('p1')
    }, 1000)
  })
}
let p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('执行2')
      resolve('p2')
    }, 2000)
  })
}
let p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('执行3')
      resolve('p3')
    }, 3000)
  })
}
let p4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('执行4')
      resolve('p4')
    }, 4000)
  })
}
let p5 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('执行5')
      resolve('p5')
    }, 5000)

  })
}

let requestList = [p1, p2, p3, p4, p5]
// requestQueue(requestList, 2)