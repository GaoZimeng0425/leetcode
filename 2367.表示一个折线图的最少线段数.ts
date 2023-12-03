/*
 * @lc app=leetcode.cn id=2442 lang=typescript
 *
 * [2367] 算术三元组的数目
 */

// @lc code=start
function arithmeticTriplets(nums: number[], diff: number): number {
  const set: Set<number> = new Set()
  let result = 0
  nums.forEach((n) => set.add(n))
  nums.forEach((n) => {
    if (set.has(n + diff) && set.has(n + diff * 2)) {
      result++
    }
  })
  return result
}
// @lc code=end
