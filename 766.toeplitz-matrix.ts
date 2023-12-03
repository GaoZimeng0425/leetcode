/*
 * @lc app=leetcode.cn id=766 lang=typescript
 * @lcpr version=21913
 *
 * [766] 托普利茨矩阵
 */

// @lc code=start
function isToeplitzMatrix(matrix: number[][]): boolean {
  const [row, col] = [matrix.length, matrix[0].length]
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) {
        return false
      }
    }
  }
  return true
}
// @lc code=end

/*
// @lcpr case=start
// [[1,2,3,4],[5,1,2,3],[9,5,1,2]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[2,2]]\n
// @lcpr case=end

 */
