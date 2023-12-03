/*
 * @lc app=leetcode.cn id=728 lang=typescript
 *
 * [728] 自除数
 */

// @lc code=start
function selfDividingNumbers(left: number, right: number): number[] {
  const list: number[] = []
  for (let i = left; i <= right; i++) {
    const number = i
    const n = `${number}`.split('').map((n) => ~~n)
    if (n.every((c) => number % c === 0)) {
      list.push(number)
    }
  }
  return list
}
// @lc code=end
