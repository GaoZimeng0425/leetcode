/*
 * @lc app=leetcode.cn id=326 lang=typescript
 * @lcpr version=21917
 *
 * [326] 3 的幂
 */

// @lc code=start
function isPowerOfThree(n: number): boolean {
  if (n === 0) return false
  if (n === 1) return true
  if (n % 3 !== 0) return false
  return isPowerOfThree(n / 3)
}
// @lc code=end

/*
// @lcpr case=start
// 27\n
// @lcpr case=end

// @lcpr case=start
// 0\n
// @lcpr case=end

// @lcpr case=start
// 9\n
// @lcpr case=end

// @lcpr case=start
// 45\n
// @lcpr case=end

 */
