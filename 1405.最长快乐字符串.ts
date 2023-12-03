/*
 * @lc app=leetcode.cn id=1405 lang=typescript
 *
 * [1405] 最长快乐字符串
 */

// @lc code=start
function longestDiverseString(a: number, b: number, c: number): string {
  const list: [number, string][] = [[a, 'a'], [b, 'b'], [c, 'c']]
  const arr = list.sort((a, b) => (b[0] - a[0]))
  return 'a'
};
// @lc code=end

