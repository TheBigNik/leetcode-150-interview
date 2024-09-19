class Solution(object):
    def removeDuplicates(self, nums):
        if nums.count(nums[0]) > 1:
            temp = str(nums.pop(0))

        new_string = str(nums)



a = Solution.removeDuplicates([], [0,0,1,1,1,1,2,3,3])
print(a)