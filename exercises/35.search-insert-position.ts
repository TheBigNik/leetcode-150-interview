/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    for ( let i: number = 0 ; i < nums.length ; i++){
        if ( nums[i] === target) return i
    }
    for ( let j: number = 0 ; j < nums.length ; j++){
        if ( nums[j] > target) return j
    }
    return nums.length

    
    
};
// @lc code=end

