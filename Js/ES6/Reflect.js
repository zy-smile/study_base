let user = {
  age: 20,
  sex: 1,
  username: '李四'
}
let nums = [1,2,3,4]
console.log(Reflect.ownKeys(user));
Reflect.set(user,"sex",2)
console.log(user.sex);
console.log(Reflect.get(user,'age'));
function getTotal(a,b) {
  console.log(a + b);
  console.log(this.username);
  return a + b

}
Reflect.apply(getTotal,user,[1,2])
