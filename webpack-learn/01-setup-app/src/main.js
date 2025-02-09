import './txt/1.txt'
import './css/index.css'
import './css/common.less'
import './util/deepClone'

import img from './assets/person.png'
let imgStr = document.createElement('img')
imgStr.src = img
imgStr.style = 'width: 200px;'
window.addEventListener("DOMContentLoaded", function () {
  document.body.appendChild(imgStr)
})
let info = {
  name: "John Doe",
}