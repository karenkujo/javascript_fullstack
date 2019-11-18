// es6新特性
var distributeCandies = function (candies) {
  var count = 0 //种类数 unique
  var obj = {}
  // 糖果的种类数
  candies.forEach(function(item) {
    if (!obj[item]) {
      obj[item] = 1  // 出现过了
      count++ // 加上总类数
    }
  })
  return count >= (candies.length / 2) ? (candies.length >> 1) / 2 : count
}
console.log(distributeCandies([1,1,2,2,3,3]))