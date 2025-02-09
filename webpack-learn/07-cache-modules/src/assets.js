import img1 from '../assets/4.png'

import img2 from '../assets/1.jpg'

import svgSrc from '../assets/5.svg'

function createImg(src) {
  let img = document.createElement('img')
  img.style.cssText = 'width: 400px;height: 220px; display: block;'
  img.src = src
  document.body.appendChild(img)
}

createImg(img1)
createImg(img2)
createImg(svgSrc)