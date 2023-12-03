/*
 * @lc app=leetcode.cn id=2119 lang=typescript
 * @lcpr version=21913
 *
 * [2119] 反转两次的数字
 */

// @lc code=start
function isSameAfterReversals(num: number): boolean {
  if (num === 0) return true
  return !`${num}`.endsWith('0')
}
// @lc code=end

/*
// @lcpr case=start
// 609576\n
// @lcpr case=end

// @lcpr case=start
// 526\n
// @lcpr case=end

// @lcpr case=start
// 1800\n
// @lcpr case=end

// @lcpr case=start
// 0\n
// @lcpr case=end

 */
