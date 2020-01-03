let arr = [1, 2, 3, 5, 7, 10, 11, 13, 15, 18, 20, 23]

function search(arr, item) {
  let low = 0
  let height = arr.length - 1
  let mid
  let element
  while(low <= height) {
    mid = Math.floor((low + height) / 2)
    element = arr[mid]
    if (element < item) {
      low = mid + 1
    } else if (element > item) {
      height = mid - 1
    } else {
      return mid
    }
  }
  return -1
}
console.log(search(arr, 20))