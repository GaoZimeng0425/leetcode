/*
 * @Author: gaozimeng
 * @Date: 2021-08-01 17:15:36
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-08-01 17:27:37
 * @Description: Do not edit
 * @FilePath: /editor/Users/gaozimeng/.leetcode/1337.矩阵中战斗力最弱的-k-行.ts
 */
/*
 * @lc app=leetcode.cn id=1337 lang=typescript
 *
 * [1337] 矩阵中战斗力最弱的 K 行
 */

// @lc code=start
const calc = (l: number[]): number => l.reduce((r, i) => r + i)
function kWeakestRows(mat: number[][], k: number): number[] {
  return mat
    .map((item, i) => ({ i: i, sum: calc(item) }))
    .sort((a, b) => a.sum - b.sum)
    .map(({ i }) => i)
    .slice(0, k)
}
// @lc code=end
