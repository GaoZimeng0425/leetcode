/*
 * @lc app=leetcode.cn id=463 lang=typescript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
function islandPerimeter(grid: number[][]): number {
  let count = 0
  const ROW = grid.length - 1
  const COL = grid[0].length - 1

  grid.forEach((row, i) => {
    row.forEach((col, j) => {
      if (col === 1) {
        if (i === ROW) {
          count++
        } else if (grid[i + 1][j] !== 1) {
          count++
        }
        if (i === 0) {
          count++
        } else if (grid[i - 1][j] !== 1) {
          count++
        }

        if (j === 0) {
          count++
        } else if (row[j - 1] !== 1) {
          count++
        }
        if (j === COL) {
          count++
        } else if (row[j + 1] !== 1) {
          count++
        }
      }
    })
  })
  return count
}
// @lc code=end
