// const data = {};
// const element = document.getElementById('myDiv');

// data[element] = 'metadata';
// data['[object HTMLDivElement]'] // "metadata"

// const m = new Map();
// const o = {p: 'Hello World'};

// m.set(o, 'content')
// m.get(o) // "content"

// m.has(o) // true
// m.delete(o) // true
// m.has(o) // false

// const map = new Map([
//   ['name', '张三'],
//   ['title', 'Author']
// ]);

// map.size // 2
// map.has('name') // true
// map.get('name') // "张三"
// map.has('title') // true
// map.get('title') // "Author"

// const items = [
//   ['name', '张三'],
//   ['title', 'Author']
// ];

// const map = new Map();

// items.forEach(
//   ([key, value]) => map.set(key, value)
// );
// 实际上，不仅仅是数组，任何具有Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数。
// 所以Set、Map都可以用来生成新的Map

const map = new Map();

const k1 = ['a'];
const k2 = ['a'];

map
.set(k1, 111)
.set(k2, 222);

map.get(k1) // 111
map.get(k2) // 222

// 表面是针对同一个键，但实际上这是两个不同的数组实例，内存地址是不一样的
