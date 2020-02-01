function longestValidParentheses(s) {
  // 最长有效匹配括号长度  leetcode 32
  // 有效括号的升级版 + 长度
  var max = 0 // 最大长度
  if (s.length == 0 || s.length == 1) return max
  var stack = [] // 使用了栈来实现匹配
  // 嵌套循环 比较一下
  for (var i = 0; i < s.length; i++) {
    var tmpMax = 0 // 当前括号的有效匹配长度  重新开始
    for (var j = i; j < s.length; j++) { // 从i开始，自己也算+1
      if (s[j] == '(') {
        stack.push('(')
        tmpMax++
      } else if (s[j] == ')') {
        if (stack.length < 1) {
          // 栈空的, 当前位置的括号有效匹配，结束了
          max = max < tmpMax ? tmpMax : max
          break
        } else {
          stack.pop() // 出栈
          tmpMax++
        }
      }
    }
    if (stack.length == 0) { // 从当前位置到最后一个位置都匹配
      max = max < tmpMax ? tmpMax : max
    }
    stack = []
  }
  return max
}

console.log(longestValidParentheses('(()'))