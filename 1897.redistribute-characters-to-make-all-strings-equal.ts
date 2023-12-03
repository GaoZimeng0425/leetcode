/*
 * @lc app=leetcode.cn id=1897 lang=typescript
 * @lcpr version=21913
 *
 * [1897] 重新分配字符使所有字符串都相等
 */

// @lc code=start
function makeEqual(words: string[]): boolean {
  const map = new Map<string, number>()
  for (const char of words.join('')) {
    map.set(char, (map.get(char) || 0) + 1)
  }
  return [...map.values()].every((count) => count % words.length === 0)
}
// @lc code=end

/*
// @lcpr case=start
// ["abc","aabc","bc"]\n
// @lcpr case=end

// @lcpr case=start
// ["ab","a"]\n
// @lcpr case=end

 */
