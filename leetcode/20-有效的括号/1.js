var isValid = function(s) {
  if (!s || s.length < 1) return true
  var n = s.length
  const stack = [] // 栈
  for (var i = 0; i < n; i++) { // 时间复杂度度n
    var c = s[i]
    // console.log(c)
    if (c == '(') { // 如果是左括号  等着右括号来消消乐的
      stack.push(c) // 入栈
    } else {
      if (stack.length < 1) { // 第一个就是 )
        return false
      }
      // ) 将栈里的元素消一个 
      stack.pop()
    }
  }
  return stack.length > 0 ? false : true
}

console.log(isValid('()'))