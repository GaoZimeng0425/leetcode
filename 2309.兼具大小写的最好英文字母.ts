/*
 * @lc app=leetcode.cn id=2309 lang=typescript
 * @lcpr version=21908
 *
 * [2309] 兼具大小写的最好英文字母
 */

// @lc code=start
const isUpperCase = (s: string) => s === s.toUpperCase()
function greatestLetter(s: string): string {
  const result: string[] = []
  const set = new Set()
  for (const str of s) {
    if (set.has(str)) result.push(str.toUpperCase())
    const has = isUpperCase(str) ? str.toLocaleLowerCase() : str.toUpperCase()
    set.add(has)
  }
  return result.sort().at(-1) ?? ''
}
// @lc code=end

/*
// @lcpr case=start
// "lEeTcOdE"\n
// @lcpr case=end

// @lcpr case=start
// "arRAzFif"\n
// @lcpr case=end

// @lcpr case=start
// "AbCdEfGhIjK"\n
// @lcpr case=end

 */
