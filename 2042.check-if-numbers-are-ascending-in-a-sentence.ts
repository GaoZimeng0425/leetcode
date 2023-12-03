/*
 * @lc app=leetcode.cn id=2042 lang=typescript
 * @lcpr version=21913
 *
 * [2042] 检查句子中的数字是否递增
 */

// @lc code=start
const reg = /^\d+$/
const isNumber = (s: string): boolean => reg.test(s)
function areNumbersAscending(s: string): boolean {
  let prev = -Infinity
  return s.split(' ').every((v) => {
    if (!isNumber(v)) return true
    const n = parseInt(v)
    console.log(n, '>>>')
    if (n > prev) {
      prev = n
      return true
    } else {
      return false
    }
  })
}
// @lc code=end

/*
// @lcpr case=start
// "1 box has 3 blue 4 red 6 green and 12 yellow marbles"\n
// @lcpr case=end

// @lcpr case=start
// "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"\n
// @lcpr case=end

// @lcpr case=start
// "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"\n
// @lcpr case=end

// @lcpr case=start
// "4 5 11 26"\n
// @lcpr case=end

 */
