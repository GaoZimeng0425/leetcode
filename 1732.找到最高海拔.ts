/*
 * @lc app=leetcode.cn id=1732 lang=typescript
 * @lcpr version=21908
 *
 * [1732] 找到最高海拔
 */

// @lc code=start
function largestAltitude(gain: number[]): number {
  return gain.reduce(([prev, result], g) => [prev + g, Math.max(result, prev + g)], [0, 0])[1]
}
// @lc code=end

/*
// @lcpr case=start
// [-5,1,5,0,-7]\n
// @lcpr case=end

// @lcpr case=start
// [-4,-3,-2,-1,4,3,2]\n
// @lcpr case=end

 */
