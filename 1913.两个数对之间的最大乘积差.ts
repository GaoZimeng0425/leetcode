/*
 * @lc app=leetcode.cn id=1913 lang=typescript
 *
 * [1913] 两个数对之间的最大乘积差
 */

// @lc code=start
function maxProductDifference(nums: number[]): number {
	nums.sort((a, b) => b - a)
	return (nums[0] * nums[1]) - (nums[nums.length - 1] * nums[nums.length - 2])
};
// @lc code=end

