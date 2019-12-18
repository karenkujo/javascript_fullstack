## 
html(string) 解析为 dom 树
css 解析为 cssom
合成 render tree
生成 layout tree
绘制 paint
composite 合成：一个页面有很多分层，最终合成一个平面


## 性能优化
js layout paint composite

改变了 元素的布局： width, height, display         layout->paint->composite
改变了元素的 color, shadow     (重绘)  repaint->composite
重排一定会引起重绘 重绘不一定会引起重排
transform, opacity   直接到 composite  前提条件：变化的元素要处于一个 独立的层级 上面

影响的是：当前处于的一个层

提升：
1. will-change
2. 3d transform: `translate3D(60px, 0, 0)`
3. animation transition 激活的时候
4. video
5. backface-visiblity: hidden

left, top
transform