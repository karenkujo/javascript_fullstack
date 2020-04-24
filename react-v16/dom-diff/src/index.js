import { createElement, render, renderDom } from './element'
let vertualDom = createElement('ul', { class: 'list' }, [
  createElement('ul', { class: 'item'}, ['aaa']),
  createElement('ul', { class: 'item'}, ['bbb']),
  createElement('ul', { class: 'item'}, ['ccc'])
])

let el = render(vertualDom)
renderDom(el, window.root)
console.log(el)