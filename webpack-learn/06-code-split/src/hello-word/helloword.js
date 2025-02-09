async function HelloWord() {
  const str = await getString();
  console.log(str);
}

function getString() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello World');
    }, 2000)
  })
}
export default HelloWord