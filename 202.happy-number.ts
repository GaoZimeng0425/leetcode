/*
 * @lc app=leetcode.cn id=202 lang=typescript
 * @lcpr version=21917
 *
 * [202] 快乐数
 */

// @lc code=start
const calc = (n: number): number[] | null => {
  if (n < 10) return null
  const result: number[] = []
  while (n > 0) {
    const digit = n % 10
    result.push(digit)
    n = Math.floor(n / 10)
  }
  return result
}
function isHappy(n: number): boolean {
  if (n === 1) return true
  while (n > 10) {
    const list = calc(n)
    if (list === null) return false
    n = list.reduce((a, b) => a + b * b, 0)
    if (n === 1) return true
  }
  return false
}
// @lc code=end

/*
// @lcpr case=start
// 7\n
// @lcpr case=end

// @lcpr case=start
// 2\n
// @lcpr case=end

 */
