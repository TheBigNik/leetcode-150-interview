'''
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".



Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

'''
class Solution(object):
    def longestCommonPrefix(self, strs):
        common_prefix = ""
        if len(strs) == 1:
            return strs[0][0]
        i = 0
        for word in range(1, len(strs)):
            word_s = strs[0][i]
            print(word_s)
            if word_s == strs[word][i]:
                common_prefix += strs[word][i]
                i += 1
                print(i)
                continue
            else:
                return common_prefix
        return common_prefix

