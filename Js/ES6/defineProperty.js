let book = {
  year: 2017,
  edition: 1
}
Object.defineProperty(book,"year",{
  get() {
    return this.year
  },
  set(newValue) {
    if(newValue > 2017) {
      this.year = newValue
      this.edition += newValue - 2017
    }
  }
})
book.year = 2018
console.log(book.edition);
