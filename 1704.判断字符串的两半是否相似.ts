/*
 * @lc app=leetcode.cn id=1704 lang=typescript
 *
 * [1704] 判断字符串的两半是否相似
 */

// @lc code=start
function halvesAreAlike(s: string): boolean {
  const set: Set<string> = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  const half = s.length / 2
  const [head, tail] = [s.slice(0, half), s.slice(half)]
  let count = 0
  for (const char of head) {
    if (set.has(char)) count++
  }
  for (const char of tail) {
    if (set.has(char)) count--
  }
  return count === 0
};
// @lc code=end

