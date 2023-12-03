/*
 * @lc app=leetcode.cn id=682 lang=typescript
 *
 * [682] 棒球比赛
 */

// @lc code=start
const calc = (list: number[]) => list.reduce((p, n) => p + n, 0)
function calPoints(operations: string[]): number {
  const list: number[] = []
  operations.forEach((value) => {
    if (value === 'C') {
      list.pop()
    } else if (value === 'D') {
      const last = list.at(-1)
      list.push(last * 2)
    } else if (value === '+') {
      const [l0, l1] = [list.at(-2), list.at(-1)]
      list.push(l0 + l1)
    } else {
      list.push(+value)
    }
  })
  return calc(list)
}
// @lc code=end
