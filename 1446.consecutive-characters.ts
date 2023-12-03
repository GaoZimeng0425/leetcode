/*
 * @lc app=leetcode.cn id=1446 lang=typescript
 * @lcpr version=21917
 *
 * [1446] 连续字符
 */

// @lc code=start
function maxPower(s: string): number {
  let i = 1
  let max = 0
  while (i < s.length) {
    let start = i
    while (i < s.length && s[i] === s[i - 1]) {
      i++
    }
    max = Math.max(max, i - start)
    i++
  }
  return max + 1
}
// @lc code=end

/*
// @lcpr case=start
// "leeetasdffkcowkduahxisiwjwiqaksjdjfhhwiqqjhakkskksshhuqqqqcode"\n
// @lcpr case=end
// @lcpr case=start
// "leetcode"\n
// @lcpr case=end

// @lcpr case=start
// "abbcccddddeeeeedcba"\n
// @lcpr case=end

 */
