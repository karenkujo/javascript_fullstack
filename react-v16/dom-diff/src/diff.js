// 当节点类型相同时，去看一下属性是否相同

// 产生一个属性的补丁包{type:'ATTRS', attrs: {class:"list-group"}}

// 新的dom节点不在{type: 'REMOVE', index: xxxxx}

// 节点类型不相同，直接采用替换模式{type: 'REPLACE', newNode: newNOde}

// 文本的变化{type: 'TEXT', text: 1}

function diff(oldTree, newTree) {
  let patches = {}
  let index = 0
  // 递归树，比较后的结果放到补丁包中
  walk(oldTree, newTree, index, patches)

  return patches
}

const ATTRS = 'ATTRS'
function walk(oldTree, newTree, index, patches) {
  let currentPatch = []
  if (oldTree.type === newTree.type) {
    // 比较属性书否有更改
    let attrs = diffAttr(oldTree.props, newTree.props)
    if (Object.keys(attrs).length > 0) {
      currentPatch.push({type: ATTRS, attrs})
    }
  }
  if (currentPatch.length > 0) { // 当前元素确实有补丁
    // 将元素和补丁对应起来，放大到大补丁包中
    patches[index] = currentPatch
    console.log(patches)
  }
}

function diffAttr(oldAttrs, newAttrs) {
  let patch = {}
  // 判断老的属性中和新的属性的关系
  for (let key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      patch[key] = newAttrs[key] // 有可能会出现undefined
    }
  }

  // 新节点新增属性
  for (let key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      patch[key] = newAttrs[key]
    }
  }
  return patch
}

export default diff