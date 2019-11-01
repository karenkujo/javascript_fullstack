##  事件模型
捕获
冒泡
三个阶段：捕获阶段  目标阶段  冒泡阶段
addEventListener: 第三个参数默认为   false 冒泡阶段    true 捕获阶段
event.stopPropagation()   阻止冒泡
event.preventDefault()    阻止默认事件
event.target  事件触发的节点
event.currenttarget  事件绑定的节点
##  请用 DOM2 级别的事件。。
DOM0   onClick
DOM2  addEventListener
DOM3  addEventListener  增加了很多 键盘鼠标事件