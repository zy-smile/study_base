//随机生成一个树结构json数组
var treeData = [{
  id: 1,
  name: "根节点",
  pid: null,
  children: [{
      id: 2,
      name: "子节点1",
      pid: 1,
      children: [{
          id: 3,
          name: "子节点1-1",
          pid: 2,
        },
        {
          id: 4,
          name: "子节点1-2",
          pid: 2
        },
        {
          id: 5,
          name: "子节点1-3",
          pid: 2
        },
      ]
    },
    {
      id: 6,
      pid: 1,
      name: "子节点2",
      children: [{
        id: 7,
        pid: 6,
        name: "子节点2-1"
      }, ]
    }
  ]
}]

function flatTree(list) {
  let result = []
  list.forEach(item => {
    let obj = {
      ...item
    }
    delete obj.children
    result.push(obj)
    if (item.children && item.children.length > 0) {
      result = result.concat(flatTree(item.children))
    }
  })
  return result;
}

function buildTree(list, pid) {
  let result = []
  pid = pid || null
  list.forEach(item => {
    if (item.pid == pid) {
      let obj = {
        ...item
      }
      let parent = buildTree(list, obj.id)
      if (parent && parent.length > 0) {
        obj.children = parent
      }
      result.push(obj)
    }
  })
  return result
}
let result = flatTree(treeData)
console.log(result);
let result1 = buildTree(result, null)
console.log(JSON.stringify(result1))


// 