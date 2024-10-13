let a = {
  i: 1,
  valueOf: function () {
    return this.i++
  }
}
if (a == 1 && a == 2 && a == 3) {
  console.log('执行了')
}