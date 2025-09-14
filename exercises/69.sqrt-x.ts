/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
    if (x === 0) return 0
    let tolarance: number = 1e-10
    let n: number = x
    for (let i: number = 0; i < 1000; i++) {
        const next: number = 0.5 * (n + x / n)
        if (Math.abs(next - n) < tolarance) return next
        n = next
    }
    return Math.floor(n)
};
// @lc code=end

