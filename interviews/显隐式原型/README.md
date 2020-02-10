## for in
1. 变量是索引,不能直接进行几何运算
2. 遍历的顺序可能不是按照实际数组的内部顺序进行的
3. 使用for in 会遍历数组的所有可枚举属性,包括原型

## for of
1. 遍历的是数组的元素
2. 遍历不包括数组的原型和索引

## Function
Function.__proto__ == Function.prototype