/*
 * @lc app=leetcode.cn id=1523 lang=typescript
 * @lcpr version=21917
 *
 * [1523] 在区间范围内统计奇数数目
 */

// @lc code=start
function countOdds(low: number, high: number): number {
  if (low % 2 === 0) low++
  if (high % 2 === 0) high--
  return (high - low) / 2 + 1
}
// @lc code=end

/*
// @lcpr case=start
// 3\n7\n
// @lcpr case=end

// @lcpr case=start
// 8\n10\n
// @lcpr case=end

 */
