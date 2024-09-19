class Solution(object):
    def rotate(self, nums, k):
        k = k % len(nums)
        new_list = nums[:len(nums)-k]
        nums[:len(nums)-k] = []
        nums.extend(new_list)
a = Solution.rotate([], [1,2,3,4,5,6,7], 3)
print(a)