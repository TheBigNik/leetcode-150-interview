#
# @lc app=leetcode id=2414 lang=python
#
# [2414] Length of the Longest Alphabetical Continuous Substring
#

# @lc code=start
class Solution(object):
    def longestContinuousSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        
        max_len = 1
        curr = 1
        for i in range(1, len(s)):
            if ord(s[i]) - ord(s[i - 1]) == 1:
                curr += 1
                if curr > max_len:
                    max_len = curr
            else:
                curr = 1

        return max_len
# @lc code=end
