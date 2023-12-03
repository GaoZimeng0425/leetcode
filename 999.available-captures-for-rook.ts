/*
 * @lc app=leetcode.cn id=999 lang=typescript
 * @lcpr version=21913
 *
 * [999] 可以被一步捕获的棋子数
 */

// @lc code=start
function numRookCaptures(board: string[][]): number {
  let RP: number[] = []
  let result = 0
  const [row, col] = [board.length, board[0].length]
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === 'R') RP = [i, j]
    }
  }
  const isArea = (x: number, y: number) => x >= 0 && y >= 0 && x <= row && y <= col
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]
  for (let index = 0; index < directions.length; index++) {
    let [curX, curY] = [RP[0], RP[1]]
    const [x, y] = [directions[index][0], directions[index][1]]
    while (isArea(curX, curY)) {
      const q = board[curX][curY]
      if (q === 'B') break
      if (q === 'p') {
        result++
        break
      }
      curX += x
      curY += y
    }
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]\n
// @lcpr case=end

// @lcpr case=start
// [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]\n
// @lcpr case=end

// @lcpr case=start
// [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]\n
// @lcpr case=end

 */
