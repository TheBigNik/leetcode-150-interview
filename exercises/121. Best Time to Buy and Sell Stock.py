class Solution(object):
    def maxProfit(self, prices):
        i = 0
        buy = prices[0]
        sell = prices[0]
        prof = 0
        while i < len(prices)-1:
            if buy > prices[i+1]:
                buy = prices[i+1]
                i += 1
                continue
            elif buy <= prices[i+1]:
                sell = prices[i+1]
                temp_prof = sell - buy
                if temp_prof >= prof:
                    prof = temp_prof
                i += 1
                continue
        return prof