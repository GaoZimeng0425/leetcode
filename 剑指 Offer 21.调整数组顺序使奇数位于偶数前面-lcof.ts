/*
 * @lc app=leetcode.cn id=剑指 Offer 21 lang=typescript
 * @lcpr version=30102
 *
 * [剑指 Offer 21] 调整数组顺序使奇数位于偶数前面
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function trainingPlan(actions: number[]): number[] {
  return actions.sort((a, b) => (a % 2 == 0 ? 1 : -1))
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

 */
