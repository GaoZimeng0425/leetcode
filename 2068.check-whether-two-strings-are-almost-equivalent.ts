/*
 * @lc app=leetcode.cn id=2068 lang=typescript
 * @lcpr version=21913
 *
 * [2068] 检查两个字符串是否几乎相等
 */

// @lc code=start
function checkAlmostEquivalent(word1: string, word2: string): boolean {
  const map = new Map<string, number>()
  for (const char of word1) {
    map.set(char, (map.get(char) || 0) + 1)
  }
  for (const char of word2) {
    map.set(char, (map.get(char) || 0) - 1)
  }
  return Array.from(map.values()).every((count) => Math.abs(count) <= 3)
}
// @lc code=end

/*
// @lcpr case=start
// "abcdeef"\n"abaaacc"\n
// @lcpr case=end

// @lcpr case=start
// "aaaa"\n"bccb"\n
// @lcpr case=end

// @lcpr case=start
// "abcdeef"\n"abaaacc"\n
// @lcpr case=end

// @lcpr case=start
// "cccddabba"\n"babababab"\n
// @lcpr case=end

 */
