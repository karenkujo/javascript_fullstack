function ListNode(val) {
  this.val = val
  this.next = null
}

const n1 = new ListNode(1)
const n2 = new ListNode(2)
const n3 = new ListNode(6)
const n4 = new ListNode(3)
const n5 = new ListNode(4)
const n6 = new ListNode(5)
const n7 = new ListNode(6)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n6
n6.next = n7

function removeElements (head, val) { // 头结点和要删除的值
  // 如果当前结点的下一个结点的值为val，当前结点的next指向next.next
  // 如果头结点的值为val
  const dummy = { // 哨兵结点 假结点
    next: head // 哨兵结点为头结点可能为val的节点服务
  }
  let current = dummy // 当前结点先指向哨兵结点
  while(current && current.next) {
    let next = current.next
    if (next.val == val) {
      current.next = next.next // 值为val 下一个结点丛链表关系中移除了
    }
    if (next.val !== val) { // 不要移除的
      current = next
    }
  }
  return dummy.next //返回dummy指向的下一个结点
}

console.log(removeElements(n1, 6))