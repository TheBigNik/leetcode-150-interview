/*
 * @lc app=leetcode id=122 lang=typescript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let i: number = 1;
    let w: number = 0;
    let profit: number = 0;
    while (i < prices.length) {
        if (prices[i] > prices[w]) {
            profit += prices[i] - prices[w];
            prices.splice(w, 1);
            prices.splice(i, 1);
            i = 1;
            w = 0;
        }
        if ( i === prices.length -1) {
            prices.splice(w, 1);
            i = 1
        } else i++;
    }

    return profit;
};
// @lc code=end

