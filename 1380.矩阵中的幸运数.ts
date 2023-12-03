/*
 * @lc app=leetcode.cn id=1380 lang=typescript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
const transform = (matrix: number[][]): number[][] => {
  const result: number[][] = []
  const { length: col } = matrix[0]
  const { length: row } = matrix
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      result[i] = [...(result[i] ?? []), matrix[j][i]]
    }
    result
  }
  return result
}
const findMin = (list: [])
function luckyNumbers(matrix: number[][]): number[] {
  const result: number[] = []
  const list = transform(matrix)
  matrix.forEach(col => {
    let min = col[0]
  })
  console.log(`[高子蒙] >>> file: 1380.矩阵中的幸运数.ts >>> line 28 >>> list`, list)
  return result
}
// @lc code=end
