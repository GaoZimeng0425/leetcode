/*
 * @lc app=leetcode.cn id=1252 lang=typescript
 * @lcpr version=21908
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
const genMix = (r: number, c: number): number[][] => Array(r).fill(Array(c).fill(0))
function oddCells(m: number, n: number, indices: number[][]): number {
  const mix = genMix(m, n)
  console.log(mix)

  return 5
}
// @lc code=end

/*
// @lcpr case=start
// 2\n3\n[[0,1],[1,1]]\n
// @lcpr case=end

// @lcpr case=start
// 2\n2\n[[1,1],[0,0]]\n
// @lcpr case=end

 */
