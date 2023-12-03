/*
 * @lc app=leetcode.cn id=2810 lang=typescript
 * @lcpr version=30102
 *
 * [2810] 故障键盘
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function finalString(s: string): string {
  let reversed = false
  let result: string[] = []
  for (const char of s) {
    if (char === 'i') {
      reversed = !reversed
    } else {
      result[reversed ? 'unshift' : 'push'](char)
    }
  }
  return reversed ? result.reverse().join('') : result.join('')
}
// @lc code=end

/*
// @lcpr case=start
// "string"\n
// @lcpr case=end

// @lcpr case=start
// "poiinter"\n
// @lcpr case=end

 */
