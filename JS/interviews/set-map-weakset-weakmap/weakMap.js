// WeakMap 可以使用 set 方法添加成员
const wm1 = new WeakMap();
const key = {foo: 1};
wm1.set(key, 2);
wm1.get(key) // 2

// WeakMap 也可以接受一个数组，
// 作为构造函数的参数
// const k1 = [1, 2, 3];
// const k2 = [4, 5, 6];
// const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
// wm2.get(k2) // "bar"

// WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
// WeakMap的键名所指向的对象，不计入垃圾回收机制。
// WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。
// WeakMap 没有size, forEach clear方法

let myElement = document.getElementById('logo');
let myWeakmap = new WeakMap();

myWeakmap.set(myElement, {timesClicked: 0});

myElement.addEventListener('click', function() {
  let logoData = myWeakmap.get(myElement);
  logoData.timesClicked++;
}, false);