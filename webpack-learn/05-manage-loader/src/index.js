import HelloWord from "./hello-word/helloword";

// 引入创建图片文件
import './assets'

// 引入css
import './style/index.css'
let box = document.createElement('div')
box.innerHTML = 'hello world'
box.classList.add('box')
document.body.appendChild(box)

HelloWord()