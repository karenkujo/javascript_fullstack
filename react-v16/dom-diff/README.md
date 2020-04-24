## 生成项目
```
npm i -g create-react-app
create-react-app dom-diff
```

# 虚拟dom (virtual dom)
虚拟节点，通过js的object对象模拟DOM中的节点，然后在通过特定的render方法将其渲染成真实的dom

createElement => { type, props, children }