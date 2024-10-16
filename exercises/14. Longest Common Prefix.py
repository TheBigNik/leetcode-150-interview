class Solution(object):
    def longestCommonPrefix(self, strs):
        common_pre = ""
        l = 1
        for _ in range(len(strs[0])):
            to_check = strs[0][:l]
            for word in strs[1:]:
                if to_check == word[:l]:
                    continue
                else:
                    return common_pre
            l += 1
            common_pre = to_check
        return common_pre