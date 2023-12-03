/*
 * @lc app=leetcode.cn id=1941 lang=typescript
 * @lcpr version=21913
 *
 * [1941] 检查是否所有字符出现次数相同
 */

// @lc code=start
function areOccurrencesEqual(s: string): boolean {
  const map = new Map<string, number>()
  for (const ch of s) {
    map.set(ch, (map.get(ch) || 0) + 1)
  }
  const list = Array.from(map.values())
  return list.every((v) => v === list[0])
}
// @lc code=end

/*
// @lcpr case=start
// "abacbc"\n
// @lcpr case=end

// @lcpr case=start
// "aaabb"\n
// @lcpr case=end

 */
