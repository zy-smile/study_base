let test = {
  a: 1,
  b: 2
}
let target = {
  c: 3
}
let result = Object.assign(test,target)

console.log(result);
console.log(test);
console.log(target);