/*
 * @lc app=leetcode id=1518 lang=typescript
 *
 * [1518] Water Bottles
 */

// @lc code=start
function numWaterBottles(numBottles: number, numExchange: number): number {
  let sB: number = 0;
  let eBC: number = 0;
  let fBC: number = numBottles;
  while (fBC !== 0) {
    sB += fBC;
    eBC += fBC;
    fBC = 0;
    if (eBC >= numExchange) {
      fBC += Math.floor(eBC / numExchange);
      eBC %= numExchange;
    }
  }
  return sB;
}
// @lc code=end
