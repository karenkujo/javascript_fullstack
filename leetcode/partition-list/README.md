分隔链表  https://leetcode-cn.com/problems/partition-list/


linklist  x
隔成两个区  每个节点的初始相对位置要保留
1 2 2
4 3 5

1. 形成两个区？  每个区都是链表
定义两个列表  smaller  bigger
2. 一次链表遍历
  x 值小的放在smaller区   大的放在bigger区
3. 将这两个区连起来  smaller.next == bigger

通过两个链表  分隔链表的不同区域的子链表，两个链表再组合起来
