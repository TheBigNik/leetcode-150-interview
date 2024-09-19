class Solution(object):
    def removeDuplicates(self, nums):
        i = 0
        while i < len(nums):
            while nums.count(nums[i]) > 1:
                del nums[i]
            else:
                i += 1

        k = len(nums)
        return k

a = Solution.removeDuplicates([], [0,0,1,1,1,2,2,3,3,4])
print(a)