/*
 * @lc app=leetcode.cn id=1189 lang=typescript
 * @lcpr version=21913
 *
 * [1189] “气球” 的最大数量
 */

// @lc code=start
function maxNumberOfBalloons(text: string): number {
  const target = new Set(['b', 'a', 'l', 'o', 'n'])

  const map = new Map<string, number>()

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    if (target.has(char)) {
      map.set(char, (map.get(char) || 0) + 1)
    }
  }
  if (map.size !== target.size) return 0

  let result: number[] = []
  map.forEach((value, key) => {
    if (key === 'l' || key === 'o') {
      result.push(Math.floor(value / 2))
    } else {
      result.push(value)
    }
  })
  return Math.min(...result)
}
// @lc code=end

/*
// @lcpr case=start
// "nlaebolko"\n
// @lcpr case=end

// @lcpr case=start
// "loonbalxballpoon"\n
// @lcpr case=end

// @lcpr case=start
// "leetcode"\n
// @lcpr case=end

 */
