#
# @lc app=leetcode id=136 lang=python
#
# [136] Single Number
#

# @lc code=start
class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        counter = {}
        for i in nums:
            if i in counter:
                counter[i] += 1
            else:
                counter[i] = 1
        
        for i in counter:
            if counter[i] == 1:
                return i

# print(Solution.singleNumber('',[4,1,2,1,2]))  
        
# @lc code=end

