function getTotal(n) {
  if (n == 0 || n == 1) return n;
  return getTotal(n - 1) + getTotal(n - 2);
}
console.log(getTotal(8))