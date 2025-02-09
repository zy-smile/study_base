import HelloWord from "./hello-word/helloword";

import _ from 'lodash'
console.log(_.join(['index', 'module', 'output']), ' ');

// 引入创建图片文件
import './assets'

// 引入css
import './style/index.css'
let box = document.createElement('div')
box.innerHTML = 'hello world'
box.classList.add('box')
document.body.appendChild(box)

HelloWord()

function importHandle() {
  import('lodash').then(({
    default: _
  }) => {
    console.log(_.join(['index-import', 'module', 'output'], ' '));
  })
}
importHandle()