function getInfo(obj) {
    obj.name = 'wangwu'
    console.log(obj);
}
let info = {
    name: 'lisi'
}
getInfo(info)
console.log(info);