算法  复杂度

1. 给定一个 arr 和数字 sum，如何在数字里找到两个数字a, b，使得a + b = sum

O(n^2)  量级
O表示量级，不考虑常熟，低阶


# 数据格式  算法、脱离语言的
内存里面的数据存储，有点像数组，对象是怎么存的

# 数组 (优点和缺点)   (01)
  - 优点：
      1. 有序 (根据索引查找) O(1) 常量级别
  - 缺点： 
      2. 搜索复杂度 O(n)   forEach, find, for(x in arr) 
      3. 删除复杂度  O(n)
      4. 新增复杂度 在x这个位置插入一个元素，x后面的都要向后移 O(n)
      5. 排序

# 链表 (02)
搜索复杂度 O(n)
删除复杂度 O(1)
    1 -> 2 -> 3 -> 4
    1 -> 3 -> 4
新增复杂度 O(1)
    1 -> 2         -> 3 -> 4
           -> 5 ->