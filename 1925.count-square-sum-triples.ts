/*
 * @lc app=leetcode.cn id=1925 lang=typescript
 * @lcpr version=21917
 *
 * [1925] 统计平方和三元组的数目
 */

// @lc code=start
function countTriples(n: number): number {
  n++
  let count = 0
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (i === j) continue
      for (let y = 1; y < n; y++) {
        if (y === i || y === j) continue
        if (Math.pow(i, 2) + Math.pow(j, 2) === Math.pow(y, 2)) count++
      }
    }
  }
  return count
}

// @lc code=end
/*
// @lcpr case=start
// 5\n
// @lcpr case=end

// @lcpr case=start
// 10\n
// @lcpr case=end

 */
