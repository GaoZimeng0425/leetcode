/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子序和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let result: number = nums[0]
  let pre: number = result
  for (let i: number = 1; i < nums.length; i++) {
    const cur = nums[i];
    pre = Math.max(pre + cur, cur)
    result = Math.max(pre, result)
  }
  return result
};
// @lc code=end

