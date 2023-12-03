/*
 * @lc app=leetcode.cn id=2011 lang=typescript
 * @lcpr version=21913
 *
 * [2011] 执行操作后的变量值
 */

// @lc code=start
function finalValueAfterOperations(operations: string[]): number {
  let result = 0
  operations.forEach((operation) => {
    if (operation.includes('++')) {
      result++
    } else if (operation.includes('--')) {
      result--
    }
  })
  return result
}
// @lc code=end

/*
// @lcpr case=start
// ["--X","X++","X++"]\n
// @lcpr case=end

// @lcpr case=start
// ["++X","++X","X++"]\n
// @lcpr case=end

// @lcpr case=start
// ["X++","++X","--X","X--"]\n
// @lcpr case=end

 */
