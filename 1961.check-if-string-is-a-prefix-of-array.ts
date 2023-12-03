/*
 * @lc app=leetcode.cn id=1961 lang=typescript
 * @lcpr version=21917
 *
 * [1961] 检查字符串是否为数组前缀
 */

// @lc code=start
function isPrefixString(s: string, words: string[]): boolean {
  const l = s.length
  for (let j = 0; j < l; j++) {
    if (s.length === 0) return true
    if (s.startsWith(words[j])) {
      s = s.substring(words[j].length)
    } else {
      return false
    }
  }
  return s.length === 0
}
// @lc code=end

/*
// @lcpr case=start
// "iloveleetcode"\n["i","love","leetcode","apples"]\n
// @lcpr case=end

// @lcpr case=start
// "iloveleetcode"\n["apples","i","love","leetcode"]\n
// @lcpr case=end

 */
