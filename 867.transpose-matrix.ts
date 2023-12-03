/*
 * @lc app=leetcode.cn id=867 lang=typescript
 * @lcpr version=21912
 *
 * [867] 转置矩阵
 */

// @lc code=start
function transpose(matrix: number[][]): number[][] {
  return Array.from({ length: matrix[0].length }, (_, i) =>
    Array.from({ length: matrix.length }, (_, j) => matrix[j][i])
  )
}
// @lc code=end

/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3],[4,5,6]]\n
// @lcpr case=end

 */
