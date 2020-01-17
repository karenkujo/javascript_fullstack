function ListNode(val) {
  this.val = val; 
  this.next = null 
}

const n1 = new ListNode(1)
const n2 = new ListNode(2)
const n3 = new ListNode(3)
const n4 = new ListNode(4)
const n5 = new ListNode(5)
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
// console.log(n1)

var reverseKGroup = function(head, k) {
 if (!head || k == 1) {
   return head
 }
 var dummy = { // 哨兵节点
  next: head
 }

 // reserve
 var start = dummy // 初始化时为dummy，动态，之后会变成每个小组的开始节点
 var end = head //初始化时 ? k 相关
 var count = 0 // 计数
 while (end != null) { // 一次遍历
   count++
   if (count % k == 0) { // 整除，要翻转
    // 更新start  一次反转后  start 应该是这次反转的尾结点
    start = reserve(start, end.next) // 翻转，要能和其它小组链上
    end = start.next // 下一个小组的第一个节点
   } else {
    end = end.next // 更新 end 的值
   }
 }

 return dummy.next
}
// start, end 是要reserve的
// 一次翻转
var reserve = function (start, end) {
  var curr = start.next // 头结点
  var prev = start // 前驱结点
  var first = curr // 保存第一个结点 将会成为尾结点
  while(curr != end) { // end 3 [1, 2]
    var temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }
  // prev ?  变成小组里的头结点
  start.next = prev
  first.next = curr // 原来的头节点变成了尾结点 把小组之间链起来
  return first
}

console.log(reverseKGroup(n1, 3))