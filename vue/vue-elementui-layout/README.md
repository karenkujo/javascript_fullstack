## babel
js的语法编译器

class 关键词 -> babel -> es5的代码
里面有丰富的插件机制
vue提供了 transform-vue-jsx 负责将 template 编译为 js

```js
<el-row>
  <el-col>12</el-col>
</el-row>

h("el-row", [h("el-col", ["12"])]);
```
