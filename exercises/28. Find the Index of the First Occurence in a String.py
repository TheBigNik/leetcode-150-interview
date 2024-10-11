class Solution(object):
    def strStr(self, haystack, needle):
        i = 0
        start = 0
        end = len(needle)
        while end <= len(haystack):
            if haystack[start:end] == needle:
                return start
            else:
                start += 1
                end += 1
        else:
            return -1