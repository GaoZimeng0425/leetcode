/*
 * @lc app=leetcode.cn id=LCP 06 lang=typescript
 * @lcpr version=21914
 *
 * [LCP 06] 拿硬币
 */

// @lc code=start
function minCount(coins: number[]): number {
  return coins.reduce((a, b) => a + Math.ceil(b / 2), 0)
}
// @lc code=end

/*
// @lcpr case=start
// [4,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,10]\n
// @lcpr case=end

 */
