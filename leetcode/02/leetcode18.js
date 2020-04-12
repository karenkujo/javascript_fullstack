var deleteNode = function(head, val) {
  if (head == null) {
    return 
  }
  if (head.val == val) {
      return head.next
  }
  let dmy = new ListNode(null)
  dmy.next = head
  let cur = head
  let pre = new ListNode(null)
  while (cur != null) {
    if (cur.val == val) {
      pre.next = cur.next
      return  dmy.next
    } else {
      pre = cur
      cur = cur.next
    }
  }
}