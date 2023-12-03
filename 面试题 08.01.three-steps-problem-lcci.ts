/*
 * @lc app=leetcode.cn id=面试题 08.01 lang=typescript
 * @lcpr version=30102
 *
 * [面试题 08.01] 三步问题
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function waysToStep(n: number): number {
  if (n <= 0) return 0
  if (n === 1) return 1
  if (n === 2) return 2
  if (n === 3) return 4
  return waysToStep(n - 1) + waysToStep(n - 2) + waysToStep(n - 3)
}
// @lc code=end

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 5\n
// @lcpr case=end

 */
