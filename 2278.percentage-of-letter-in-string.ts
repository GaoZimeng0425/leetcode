/*
 * @lc app=leetcode.cn id=2278 lang=typescript
 * @lcpr version=21917
 *
 * [2278] 字母在字符串中的百分比
 */

// @lc code=start
function percentageLetter(s: string, letter: string): number {
  let count = 0
  for (const char of s) {
    char === letter && count++
  }
  return Math.floor((count / s.length) * 100)
}
// @lc code=end

/*
// @lcpr case=start
// "foobar"\n"o"\n
// @lcpr case=end

// @lcpr case=start
// "jjjj"\n"k"\n
// @lcpr case=end

 */
