import { add, reduce } from './math.js'

import{ includes } from 'lodash'
// babel-plugin-import解决tree-shaking失效问题
// 把上面语法转换为下面这种
// import includes from 'lodash/includes'


console.log(add(1, 2))
console.log(reduce(3, 2))
console.log(includes([1, 2], 1))