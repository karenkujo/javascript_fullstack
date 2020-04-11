arr = [3, 44, 13, 1, 8, 9, 7, 1, 2]

// console.log(arr.sort((a, b) => a - b))
// 抛开语言，原始的能力，只有按照索引找元素，交换元素位置，对比大小

// 冒泡排序
// 依次对比
function bubleSort(arr) {
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        arr[i] = arr[i] + arr[i + 1]
        arr[i + 1] = arr[i] - arr[i + 1]
        arr[i] = arr[i] - arr[i + 1]
      }
    }
  } 

  return arr
}
console.log(bubleSort(arr))

// 快排
// 排队的时候，随便找个数，遍历一次，比其小的放左边，否则放右边

let arr1 = [10, 3, 44, 13, 1, 8, 9, 7, 2]

function quickSort(arr) { // O(n * lgn) 但是空间占用多
  if (arr.length <= 1) {
    return arr
  }
  let flag = arr[0]
  let left = []
  let right = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > flag) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  // 递归
  return quickSort(left).concat(flag).concat(quickSort(right))
}

console.log(quickSort(arr1))

// 快排优化
let arr2 = [10, 3, 44, 13, 1, 8, 9, 7, 2]
function quickSort2 (arr) {
  // 原地快排
  if (arr.length <= 1) {
    return arr
  }
  let flag = arr[0]
  let i = 1
  let j = [arr.length - 1]
  while (i < j) {
    while(arr[i] < flag && i < j) {
      i++
    }
    while(arr[j] > flag && i < j) {
      j--
    }
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  console.log(i, j)
  // flag交换到正确的位置上
  arr.splice(j, 0, flag)
  arr.splice(0, 1)
  console.log(arr)
  // return quickSort2(arr.slice(0, i + 1)).concat(flag).concat(quickSort2(arr.slice(i + 2)))
}
console.log(quickSort2(arr2))