/*
 * @lc app=leetcode.cn id=2469 lang=typescript
 *
 * [2389] 和有限的最长子序列
 */

// @lc code=start
function answerQueries(nums: number[], queries: number[]): number[] {
  const list = [...nums].sort((a, b) => {
    return a - b
  })

  const result: number[] = []
  queries.forEach((n) => {
    let acc = 0

    for (let i = 0; i < list.length; i++) {
      acc += list[i]
      if (acc > n) {
        result.push(i)
        return
      }
    }
    result.push(list.length)
  })
  return result
}
// @lc code=end
