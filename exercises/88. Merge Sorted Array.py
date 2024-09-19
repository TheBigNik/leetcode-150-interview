class Solution(object):
    def merge(self, nums1, m, nums2, n):
        lenth_1 = len(nums1)
        lenth_2 = len(nums2)

        for d in range(lenth_1 - m):
            del nums1[-1]

        for dp in range(lenth_2 - n):
            del nums1[-1]

        for a in nums2:
            nums1.append(a)
        nums1.sort()