var removeDuplicates = function(nums) {
  const size = nums.length // 原数组的长度
  let slowP = 0 // 慢指针
  for (let fastP = 0; fastP < size; fastP++) { //快指针
    if (nums[fastP] !== nums[slowP]) { // 从同一个位置0开始
      slowP++ // 不一样
      nums[slowP] = nums[fastP] // 设置每个位置，不重复的数
    }
  }
  return slowP + 1
}

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))