/*
 * @lc app=leetcode.cn id=剑指 Offer 29 lang=typescript
 * @lcpr version=30102
 *
 * [剑指 Offer 29] 顺时针打印矩阵
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
enum Direction {
  R,
  D,
  L,
  U
}
function spiralArray(array: number[][]): number[] {
  const result: number[] = []
  const [maxRow, maxCol] = [array.length, array[0].length]
  let direct: Direction = Direction.R
  let [row, col] = [0, 0]
  while (result.length < maxRow * maxCol) {
    result.push(array[row][col])
    console.log(row, col, direct, '<<<<')

    switch (direct) {
      case Direction.R:
        console.log('R')
        col++
        break
      case Direction.D:
        console.log('D')
        row++
        break
      case Direction.L:
        console.log('L')
        col--
        break
      case Direction.U:
        console.log('U')
        row--
        break
    }

    if (row === maxRow - 1 || col === maxCol - 1 || row === 0 || col === 0) {
      direct = (direct + 1) % 4
    }
  }
  return result
}
// @lc code=end

spiralArray([
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
])
/*
// @lcpr case=start
// [[1,2,3],[8,9,4],[7,6,5]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]\n
// @lcpr case=end

 */
