arr = [13, 1, 2, 5,  3, 8, 11]
sum = 18

function findSum(arr, sum) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      return [obj[arr[i]], i]
    }
    obj[sum - arr[i]] = i
  }
}

console.log(findSum(arr, sum))