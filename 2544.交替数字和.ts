/*
 * @lc app=leetcode.cn id=2544 lang=typescript
 * @lcpr version=21909
 *
 * [2544] 交替数字和
 */

// @lc code=start
function alternateDigitSum(n: number): number {
  return Array.from(String(n), Number).reduce((a, b, i) => (a += i % 2 ? b * -1 : b))
}
// @lc code=end

/*
// @lcpr case=start
// 521\n
// @lcpr case=end

// @lcpr case=start
// 111\n
// @lcpr case=end

// @lcpr case=start
// 886996\n
// @lcpr case=end

 */
