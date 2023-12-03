/*
 * @Author: gaozimeng
 * @Date: 2020-12-11 11:52:50
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-08-30 17:12:26
 * @Description: Do not edit
 * @FilePath: /imooc-jira-master/Users/gaozimeng/.leetcode/118.杨辉三角.ts
 */
/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
// function generateRow(num: number, sum: number[][]): number[] {
//   let result = new Array(num + 1).fill(1)
//   const preview: number[] = sum[num - 1]
//   for (let i = 1; i < num; i++) {
//     result[i] = preview[i - 1] + preview[i]
//   }
//   return result
// }
function generate(numRows: number): number[][] {
  const result: number[][] = Array.from({ length: numRows }, () => [])
  result.map((arr: number[], index: number) => {
    const prev = result[index - 1] || []
    for (let i = 0; i < index + 1; i++) {
      const [p, c] = [prev[i - 1] ?? 0, prev[i] ?? 0]
      arr.push(p + c || 1)
    }
    return arr
  })
  return result
}
// @lc code=end
