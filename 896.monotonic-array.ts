/*
 * @lc app=leetcode.cn id=896 lang=typescript
 * @lcpr version=21913
 *
 * [896] 单调数列
 */

// @lc code=start
const isIncrease = (nums: number[]) =>
  nums.every((item, index) => item >= (nums[index - 1] ?? -Infinity))
const isDecrease = (nums: number[]) =>
  nums.every((item, index) => item <= (nums[index - 1] ?? Infinity))

function isMonotonic(nums: number[]): boolean {
  if (nums.length <= 2) return true
  return isIncrease(nums) || isDecrease(nums)
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [6,5,4,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,3,2]\n
// @lcpr case=end

 */
