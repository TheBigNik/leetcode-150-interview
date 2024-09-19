class Solution(object):
    def majorityElement(self, nums):
        count_dic = {}
        for i in nums:
            if i not in count_dic:
                count_dic[i] = 0
            if i in count_dic:
                count_dic[i] += 1
        for j in count_dic:
            pass

a = Solution.majorityElement([],[1,1,2,3,3,3,3,3,4,5,2,2,8,8,8,7,6,5,4,1,2,2,3,3,3,3,3,3])



print(a)