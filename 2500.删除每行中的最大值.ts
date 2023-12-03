/*
 * @lc app=leetcode.cn id=2500 lang=typescript
 * @lcpr version=21912
 *
 * [2500] 删除每行中的最大值
 */

// @lc code=start
function deleteGreatestValue(grid: number[][]): number {
  const sorted = grid.map((list) => list.sort((a, b) => a - b))
  const { length } = sorted[0]
  let result = 0
  for (let index = 0; index < length; index++) {
    const temp = []
    for (let j = 0; j < sorted.length; j++) {
      temp.push(sorted[j][index])
    }
    result += Math.max(...temp)
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// [[1,2,4],[3,3,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[10]]\n
// @lcpr case=end

 */
