import { createElement, render, renderDom } from './element'
import diff from './diff.js'
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

let patches = diff(vertualDom1, vertualDom2)

// let el = render(vertualDom)
// renderDom(el, window.root)

// console.log(vertualDom)
// console.log(el)

// DOM diff 比较两个虚拟的dom区别，比较两个对象的区别
// dom diff的作用是根据两个虚拟对象创建出补丁，描述改变的内容，将这个补丁用来更新dom
