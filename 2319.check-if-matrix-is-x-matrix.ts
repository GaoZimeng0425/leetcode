/*
 * @lc app=leetcode.cn id=2319 lang=typescript
 * @lcpr version=21917
 *
 * [2319] 判断矩阵是否是一个 X 矩阵
 */

// @lc code=start
function checkXMatrix(grid: number[][]): boolean {
  const { length } = grid
  for (let row = 0; row < length; row++) {
    for (let col = 0; col < length; col++) {
      if (row === col || col + row === length - 1) {
        if (grid[row][col] === 0) return false
      } else {
        if (grid[row][col] !== 0) return false
      }
    }
  }
  return true
}
// @lc code=end

/*
// @lcpr case=start
// [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]\n
// @lcpr case=end

// @lcpr case=start
// [[5,7,0],[0,3,1],[0,5,0]]\n
// @lcpr case=end

 */
