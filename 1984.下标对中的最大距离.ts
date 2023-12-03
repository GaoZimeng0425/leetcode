/*
 * @lc app=leetcode.cn id=1984 lang=typescript
 *
 * [1984] 学生分数的最小差值
 */

// @lc code=start
function minimumDifference(nums: number[], k: number): number {
  nums = nums.sort((a, b) => a - b)
  let min = Infinity
  for (let i = 0; i < nums.length - k + 1; i++) {
    min = Math.min(min, nums[i + k - 1] - nums[i])
  }
  return min
}
// @lc code=end
