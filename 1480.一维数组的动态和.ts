/*
 * @lc app=leetcode.cn id=1480 lang=typescript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
function runningSum(nums: number[]): number[] {
  let result = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i]
    result[i] = current + result[i - 1]
  }
  return result
};
// @lc code=end

