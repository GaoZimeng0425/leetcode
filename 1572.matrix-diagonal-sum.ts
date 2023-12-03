/*
 * @lc app=leetcode.cn id=1572 lang=typescript
 * @lcpr version=21913
 *
 * [1572] 矩阵对角线元素的和
 */

// @lc code=start
function diagonalSum(mat: number[][]): number {
  let [rows, rowe] = [0, mat[0].length - 1]
  let sum = 0
  mat.forEach((row) => {
    if (rows === rowe) {
      sum += row[rows++]
      rowe--
    } else {
      sum += row[rows++] + row[rowe--]
    }
  })
  return sum
}
// @lc code=end

/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[5]]\n
// @lcpr case=end

 */
