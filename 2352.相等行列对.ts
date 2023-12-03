/*
 * @lc app=leetcode.cn id=2352 lang=typescript
 * @lcpr version=21909
 *
 * [2352] 相等行列对
 */

// @lc code=start
function equalPairs(grid: number[][]): number {
  const n = grid.length
  let result = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let r = 1
      for (let k = 0; k < n; k++) {
        if (grid[i][k] !== grid[k][j]) {
          r = 0
          break
        }
      }
      result += r
    }
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// [[3,2,1],[1,7,6],[2,7,7]]\n
// @lcpr case=end
// @lcpr case=start
// [[11,1],[1,11]]\n
// @lcpr case=end

// @lcpr case=start
// [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]\n
// @lcpr case=end

 */
