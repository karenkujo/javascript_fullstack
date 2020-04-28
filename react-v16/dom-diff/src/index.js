import { createElement, render, renderDom } from './element'
import diff from './diff.js'
import patch from './patch.js'
let vertualDom1 = createElement('ul', { class: 'list' }, [
  createElement('ul', { class: 'item'}, ['aaa']),
  createElement('ul', { class: 'item'}, ['bbb']),
  createElement('ul', { class: 'item'}, ['ccc'])
])
let vertualDom2 = createElement('ul', { class: 'list-group' }, [
  createElement('ul', { class: 'item'}, ['111']),
  createElement('ul', { class: 'item'}, ['bbb']),
  createElement('ul', { class: 'item'}, ['333'])
])

// 如果平级元素有互换，那会导致重新渲染-----react源码中不会，因为有key这个唯一标识
// 新增节点也不会被更新

let el = render(vertualDom1)
renderDom(el, window.root)

let patches = diff(vertualDom1, vertualDom2)
// 给元素打补丁，重新更新视图
patch(el, patches)



// let el = render(vertualDom)
// renderDom(el, window.root)

// console.log(vertualDom)
// console.log(el)

// DOM diff 比较两个虚拟的dom区别，比较两个对象的区别
// dom diff的作用是根据两个虚拟对象创建出补丁，描述改变的内容，将这个补丁用来更新dom
