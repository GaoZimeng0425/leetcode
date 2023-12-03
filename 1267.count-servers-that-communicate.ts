/*
 * @lc app=leetcode.cn id=1267 lang=typescript
 * @lcpr version=21913
 *
 * [1267] 统计参与通信的服务器
 */

// @lc code=start

// function countServers(grid: number[][]): number {
//   const set = new Set<string>()
//   grid.forEach((row, i) => {
//     row.forEach((current, j) => {
//       if (current !== 1) return
//       if (
//         row.some((item, index) => index !== j && item === 1) ||
//         grid.some((item, index) => index !== i && item[j] === 1)
//       ) {
//         set.add(i + ',' + j)
//       }
//     })
//   })
//   return set.size
// }
// @lc code=end

/*
// @lcpr case=start
// [[1,0],[0,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,0],[1,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]\n
// @lcpr case=end

 */
