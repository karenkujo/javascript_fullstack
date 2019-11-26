/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let i, k, maxSum = - Number.MAX_VALUE, thisSum
    for (i = 0; i < nums.length; i++) {
      thisSum = 0
      for (k = i; k < nums.length; k++) {
        // start: i   end: k
        thisSum += nums[k]
        if (thisSum > maxSum) {
          maxSum = thisSum
        }
      }
    }
    return maxSum
}
var arr = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(arr))