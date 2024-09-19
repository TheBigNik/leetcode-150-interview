class Solution(object):
    def removeElement(self, nums, val):
        k = 0
        r = 0
        while r < len(nums):
            if nums[r] != val:
                k += 1
                r += 1
            else:
                nums.pop(r)


        return k