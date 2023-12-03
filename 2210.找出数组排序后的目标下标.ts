/*
 * @lc app=leetcode.cn id=2316 lang=typescript
 *
 * [2210] 统计数组中峰和谷的数量
 */

// @lc code=start
function countHillValley(nums: number[]): number {
  let result = 0
  let prev = nums.at(0)!
  for (let i = 1; i < nums.length - 1; i++) {
    const [current, next] = [nums[i], nums[i + 1]]
    if (current === next) {
      continue
    }
    if (current > next && current > prev) {
      result++
    }
    if (current < next && current < prev) {
      result++
    }
    prev = current
  }
  return result
}
// @lc code=end
