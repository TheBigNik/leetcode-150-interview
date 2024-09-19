class Solution(object):
    def maxProfit(self, prices):
        sorted_list = sorted(prices)
        biggest = -1
        while len(sorted_list) > 1:
            if prices.index(sorted_list[0]) < prices.index(sorted_list[biggest]):
                return sorted_list[biggest] - sorted_list[0]
            else:
                sorted_list.pop()
        else:
            if len(prices) == 1:
                return 0
            prices.remove()
            return Solution.maxProfit(self, prices)



a = Solution.maxProfit([], [7,6,4,3,1])
print(a)