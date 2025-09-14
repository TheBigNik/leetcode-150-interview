/*
 * @lc app=leetcode id=1304 lang=typescript
 *
 * [1304] Find N Unique Integers Sum up to Zero
 */

// @lc code=start
function sumZero(n: number): number[] {
    const arr:number[] = []
    const range: number = Math.floor(n/2);
    for (let i: number = -range; i <= range; i++){
        arr.push(i)
    };
    if ( n%2 === 0 ) return arr.slice(0, range).concat(arr.slice(range+1))
    else return arr
};
// @lc code=end

