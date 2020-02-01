// 空间复杂度变成O(1)  不用栈
var isValid = function(s) {
  if (!s || s.length < 1) return true

  var n = s.length
  var sum = 0   // O(1) 用一个变量取代stack
  for (var i = 0; i < n; i++)  {
    var c = s[i]
    if (c == '(') {
      sum++
    } else {
      if (sum == 0) {
        return false
      } else {
        sum--
      }
    }
  }
  return sum == 0 ? true : false
}

console.log(isValid('()'))