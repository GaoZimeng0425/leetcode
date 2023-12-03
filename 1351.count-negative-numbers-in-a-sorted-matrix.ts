/*
 * @lc app=leetcode.cn id=1351 lang=typescript
 * @lcpr version=21917
 *
 * [1351] 统计有序矩阵中的负数
 */

// @lc code=start
function countNegatives(grid: number[][]): number {
  const [rowLength, colLength] = [grid.length, grid[0].length]
  let count = 0
  for (let row = rowLength - 1; row >= 0; row--) {
    for (let col = colLength - 1; col >= 0; col--) {
      if (grid[row][col] < 0) {
        count++
      } else {
        break
      }
    }
  }
  return count
}
// @lc code=end

/*
// @lcpr case=start
// [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]\n
// @lcpr case=end

// @lcpr case=start
// [[3,2],[1,0]]\n
// @lcpr case=end

 */
