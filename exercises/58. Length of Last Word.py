class Solution(object):
    def lengthOfLastWord(self, s):
        sent_list = s.split()
        return len(sent_list[-1])