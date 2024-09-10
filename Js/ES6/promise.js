let p1 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('p1执行了')
            resolve()
        },1000)
    })
}
let p2 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('p2执行了')
            resolve()
        },2000)
    })
}
let p3 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('p3执行了')
            resolve()
        },2000)
    })
}
// Promise.all([p1(),p2()]).then(() => {
//     console.log('p1p2执行完毕')
// })
// Promise.race([p1(),p2()]).then(() => {
//     console.log('p1首先结束')
// })
// p1().then(() => {
//     return p2()
// }).then(() => {
//     return p3()
// })
[p1,p2,p3].reduce((total,fn) => {
    console.log(total)
    return total.then(fn)
},Promise.resolve())
