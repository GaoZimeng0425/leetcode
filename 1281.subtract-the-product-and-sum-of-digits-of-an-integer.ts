/*
 * @lc app=leetcode.cn id=1281 lang=typescript
 * @lcpr version=21913
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
function subtractProductAndSum(n: number): number {
  const arr = `${n}`.split('').map(Number)
  return arr.reduce((a, b) => a * b) - arr.reduce((a, b) => a + b)
}
// @lc code=end

/*
// @lcpr case=start
// 234\n
// @lcpr case=end

// @lcpr case=start
// 4421\n
// @lcpr case=end

 */
