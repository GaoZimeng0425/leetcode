/*
 * @lc app=leetcode.cn id=1464 lang=typescript
 *
 * [1464] 数组中两元素的最大乘积
 */

// @lc code=start
// function maxProduct(nums: number[]): number {
//   let l = nums.sort((a, b) => a - b).slice(-2)
//   return (l[0] - 1) * (l[1] - 1)
// };
function maxProduct(nums: number[]): number {
  let max = nums[0]
  let s = Number.MIN_SAFE_INTEGER
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i]
    if (current >= max) {
      s = max
      max = current
    } else if (current > s) {
      s = current
    }
  }
  return (s - 1) * (max - 1)
};
// @lc code=end

