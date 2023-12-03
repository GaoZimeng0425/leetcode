/*
 * @lc app=leetcode.cn id=剑指 Offer 10- II lang=typescript
 * @lcpr version=30102
 *
 * [剑指 Offer 10- II] 青蛙跳台阶问题
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function trainWays(num: number): number {
  if (num <= 1) return 1
  const count = trainWays(num - 1) + trainWays(num - 2)
  if (count > 1000000007) return 1000000008
  return count
}
// @lc code=end

/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 5\n
// @lcpr case=end

 */
