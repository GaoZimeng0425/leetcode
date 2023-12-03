/*
 * @lc app=leetcode.cn id=2639 lang=typescript
 * @lcpr version=21917
 *
 * [2639] 查询网格图中每一列的宽度
 */

// @lc code=start
function findColumnWidth(grid: number[][]): number[] {
  let [x, y] = [grid[0].length, grid.length]
  let ans = []
  for (let i = 0; i < x; i++) {
    let max = `${grid[0][i]}`.length
    for (let j = 1; j < y; j++) {
      max = Math.max(max, `${grid[j][i]}`.length)
    }
    ans.push(max)
  }
  return ans
}
// @lc code=end

/*
// @lcpr case=start
// [[1],[22],[333]]\n
// @lcpr case=end

// @lcpr case=start
// [[-15,1,3],[15,7,12],[5,6,-2]]\n
// @lcpr case=end

 */
