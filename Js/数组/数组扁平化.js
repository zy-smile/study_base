let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [
    [7, 8],
    [9, 10]
  ]
]
// let res = arr.flat(Infinity)
// console.log(res)
function flatArr(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatArr(cur) : cur)
  }, [])
}
let newArr = flatArr(arr)
console.log(newArr)

console.log([].concat([1]))