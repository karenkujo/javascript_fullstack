const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 5
      },
      right: {
        val: 6,
        left: {
          val: 8
        }
      }
    },
    right: {
      val: 7,
      right: {
        val: 9
      }
    }
  },
  right: {
    val: 3
  }
}

let arr = []
// 爆栈
// 手动维护一个栈
const preOrder = function(tree) {
  if (tree) {
    arr.push(tree.val)
    preOrder(tree.left)
    preOrder(tree.right)
  }
}
preOrder(tree)
console.log(arr)

function loopPreOrder (tree) {
  let stack = []
  let res = []
  let current = tree
  stack.push(current)
  while (stack.length > 0) {
    while(current) {
      stack.push(current)
      res.push(current.val)
      current = current.left
    }
    current = stack.pop()
    current = current.right
  }
  return res
}
