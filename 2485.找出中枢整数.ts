/*
 * @lc app=leetcode.cn id=2485 lang=typescript
 * @lcpr version=21909
 *
 * [2485] 找出中枢整数
 */

// @lc code=start
function pivotInteger(n: number): number {
  for (let i = 1; i <= n; i++) {
    const a = ((1 + i) * i) / 2
    const b = ((i + n) * (n - i + 1)) / 2
    if (a === b) return i
  }
  return -1
}
// @lc code=end

/*
// @lcpr case=start
// 8\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

// @lcpr case=start
// 4\n
// @lcpr case=end

 */
