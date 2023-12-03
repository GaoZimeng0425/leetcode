/*
 * @lc app=leetcode.cn id=剑指 Offer 58 - II lang=typescript
 * @lcpr version=30102
 *
 * [剑指 Offer 58 - II] 左旋转字符串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function dynamicPassword(password: string, target: number): string {
  return password.slice(target) + password.slice(0, target)
}
// @lc code=end
/*
// @lcpr case=start
// "s3cur1tyC0d3"\n4\n
// @lcpr case=end

// @lcpr case=start
// "lrloseumgh"\n6\n
// @lcpr case=end

 */
