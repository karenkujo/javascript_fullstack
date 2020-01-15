function ListNode(val) {
  this.val = val
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

// 1. 原地，没有两个数组可以用了，O(n)
// 2. 哨兵结点

var oddEvenList = function (head) {
  if (!head || !head.next) {
    return head
  }
  // 哨兵结点  指向第一个奇结点
  // 奇数链表的头结点
  const dummyHeaad1 = {
    // 没有val
    next: head
  }
  // 偶数链表
  const dummyHeaad2 = {
    // 没有val
    next: head.next
  }
  let odd = dummyHeaad1.next // 奇数结点
  let even = dummyHeaad2.next // 偶数结点
  while (odd && odd.next && even && even.next) {
    const oddNext = odd.next.next // 下一个奇数结点
    const evenNext = even.next.next // 下一个偶数结点
    odd.next = oddNext
    even.next = evenNext

    odd = oddNext
    even = evenNext
  }
  // 拼接奇偶链表
  odd.next = dummyHeaad2.next

  return dummyHeaad1.next
}

console.log(oddEvenList(n1))
