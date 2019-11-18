from typing import List

class Solution:
  def distributeCandies(self, candies: List[int]) -> int:
    return min(len(ser(candies)), len(candies) >> 1)


x = Solution()
print(x.distributeCandies([1,1,2,2,3,3))