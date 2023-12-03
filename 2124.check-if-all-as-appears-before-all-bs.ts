/*
 * @lc app=leetcode.cn id=2124 lang=typescript
 * @lcpr version=21913
 *
 * [2124] 检查是否所有 A 都在 B 之前
 */

// @lc code=start
function checkString(s: string): boolean {
  let i = s.length - 1
  for (let index = 0; index < s.length; index++) {
    const char = s[index]
    if (char === 'b') {
      i = index
    } else if (index > i) {
      return false
    }
  }
  return true
}
// @lc code=end

/*
// @lcpr case=start
// "aaabbb"\n
// @lcpr case=end

// @lcpr case=start
// "abab"\n
// @lcpr case=end

// @lcpr case=start
// "bbb"\n
// @lcpr case=end

 */
