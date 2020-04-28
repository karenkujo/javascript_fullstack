import { Element, render } from './element'

let allPatches
let index = 0 // 默认哪个需要打补丁
function patch(node, patches) {
  allPatches = patches

  walk(node)
  // 给某个元素打补丁
}

function walk(node) {
  let currentPatch = allPatches[index++]
  let childNodes = node.childNodes
  childNodes.forEach(child => walk(child))
  if (currentPatch && currentPatch.length > 0) {
    doPatch(node, currentPatch)
  }
}

function doPatch(node, patches) {
  patches.forEach(patch => {
    switch (patch.type) {
      case 'ATTRS':
        for (let key in patch.attrs) {
          let value = patch.attrs[key]
          if (value) {
            setAttr(node, key, value)
          } else {
            node.removeAttribute(key)
          }
        }
        break;
      case 'TEXT':
        node.textContent = patch.text
        break;
      case 'REPALCE':
        let newNode = (patch.newNode instanceof Element) ? 
        render(patch.newNode) : document.createTextNode(patch.newNode)
        node.parentNode.replaceChild(newNode, node)
        break;
      case 'REMOVE':
        node.parentNode.removeChild(node)
        break;
      default:
        break;
    }
  })
}

function setAttr(node, key, value) {
  switch (key) {
    case 'value': // node是一个input或者textarea
      if (node.tagName.toUpperCase() === 'INPUT' || 
      node.tagName.toUpperCase() === 'TEXTAREA') {
        node.value = value
      } else {
        node.setAttribute(key, value)
      }
      break;
    case 'style':
      node.style.cssText = value
      break;
    default:
      node.setAttribute(key, value)
      break;
  }
}

export default patch