/*
 * @lc app=leetcode.cn id=1742 lang=typescript
 * @lcpr version=21913
 *
 * [1742] 盒子中小球的最大数量
 */

// @lc code=start
function countBalls(lowLimit: number, highLimit: number): number {
  const map: number[] = []
  for (let i = lowLimit; i <= highLimit; i++) {
    let index = 0
    ;`${i}`.split('').forEach((c) => {
      index += parseInt(c)
    })
    map[index] = (map[index] || 0) + 1
  }

  return Math.max(...map.filter((v) => typeof v === 'number'))
}
// @lc code=end

/*
// @lcpr case=start
// 1\n10\n
// @lcpr case=end

// @lcpr case=start
// 5\n15\n
// @lcpr case=end

// @lcpr case=start
// 19\n28\n
// @lcpr case=end

 */
