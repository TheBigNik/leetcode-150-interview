/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  const counter: { [key: number]: number } = {};

  for (let i of nums) {
    if (i in counter) {
      counter[i] += 1;
    } else {
      counter[i] = 1;
    }
  }

  for (let i in counter) {
    if (counter[i] === 1) {
      return Number(i);
    }
  }

  return -1;
}
// @lc code=end
