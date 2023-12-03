/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
let map = new Map()
function climbStairs(n: number): number {
  if (n === 0) return 1
  if (n < 0) return 0
  if (map.has(n)) return map.get(n)
  const result = climbStairs(n - 1) + climbStairs(n - 2)
  map.set(n, result)
  return result
};
// @lc code=end

