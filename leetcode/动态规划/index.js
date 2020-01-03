// a = (3, 2)
// b = (4, 3)
// c = (5, 4)

// function fn (type, capacity) {
//   return a + b || c
// }

var values = [5, 4, 3], 
    weights = [4, 3, 2], 
    capacity = 5, 
    n = values.length

function pack(w, val, capacity, n) {
  let T = []
  for (let i = 0; i < n; i++) {
    T[i] = [] // [[0, 0, 3, 3, 3], [0, 0], [0]]
    for (let j = 0; j <= capacity; j++) {
      if (j === 0) {
        T[i][j] = 0
        continue
      }
      if (j < w[i]) { // 容量小于商品重量，此处hold不住
        if (i === 0) {
          T[i][j] = 0
        } else {
          T[i][j] = T[i - 1][j]
        }
        continue
      }
      if (i === 0) {
        T[i][j] = val[i]
      } else {
        T[i][j] = Math.max(val[i] + T[i - 1][j - w[i]], T[i - 1][j])
      }
    }
  }
  console.log(T)
  findValue(w, val, capacity, n, T)
  return T
}

function findValue(w, val, capacity, n, T) { // 找需要的物品
  var i = n - 1, j = capacity
  while (i > 0 && j > 0) {
    if (T[i][j] !== T[i - 1][j]) {
      console.log(`选择物品${i},重量:${w[i]},价值:${values[i]}`)
      j = j - w[i]
      i--
    } else {
      i--
    }
  }
  if (i === 0) {
    if (T[i][j] !== 0) {
      console.log(`选择物品${i},重量:${w[i]},价值:${values[i]}`)
    }
  }
}

pack(weights, values, capacity, n)


