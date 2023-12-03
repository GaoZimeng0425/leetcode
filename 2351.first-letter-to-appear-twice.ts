/*
 * @lc app=leetcode.cn id=2351 lang=typescript
 * @lcpr version=21917
 *
 * [2351] 第一个出现两次的字母
 */

// @lc code=start
function repeatedCharacter(s: string): string {
  const set = new Set<string>()
  for (const char of s) {
    if (set.has(char)) return char
    set.add(char)
  }
  return ''
}
// @lc code=end

/*
// @lcpr case=start
// "abccbaacz"\n
// @lcpr case=end

// @lcpr case=start
// "abcdd"\n
// @lcpr case=end

 */
