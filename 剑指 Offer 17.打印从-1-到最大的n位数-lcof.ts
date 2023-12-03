/*
 * @lc app=leetcode.cn id=剑指 Offer 17 lang=typescript
 * @lcpr version=30102
 *
 * [剑指 Offer 17] 打印从1到最大的n位数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function countNumbers(cnt: number): number[] {
  return Array.from({ length: Math.pow(10, cnt) - 1 }, (_, i) => i + 1)
}
// @lc code=end

/*
// @lcpr case=start
// 2\n
// @lcpr case=end

 */
