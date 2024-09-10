let user = {
  
}
Object.defineProperties(user,{
  year_: {
    value: 20
  },
  username: {
    get() {
      return this.year_
    },
    set(newVal) {
      console.log(newVal);
      this.year_ = newVal
    }
  }
})
user.username = 40
console.log(user.username);