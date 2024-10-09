(function () {
  let size, signW;
  let body = document.documentElement || document.body;

  function resize() {
    let W = body.clientWidth;
    if (W < 750) {
      size = 100
      signW = 750
    } else {
      size = 18;
      signW = 1920
    }
    let p = W / signW
    // 实际字体大小 / 设计稿字体 =  实际宽度 / 设计稿宽度
    let fontSize = p * size;
    body.style.fontSize = fontSize + 'px'
    console.log(fontSize)
  }
  resize()
  window.addEventListener('resize', resize)
})()