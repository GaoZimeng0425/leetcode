/*
 * @lc app=leetcode.cn id=118 lang=typescript
 * @lcpr version=30204
 *
 * [118] 杨辉三角
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function generate(numRows: number): number[][] {
  if (numRows === 0) return []
  const result: number[][] = [[1]]
  if (numRows === 1) return result
  for (let row = 1; row < numRows; row++) {
    const currentRow: number[] = []
    const prevRow = result[row - 1]
    for (let col = 0; col < row + 1; col++) {
      currentRow.push((prevRow[col - 1] ?? 0) + (prevRow[col] ?? 0))
    }
    result.push(currentRow)
  }
  return result
};
// @lc code=end


/*
// @lcpr case=start
// 5\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
