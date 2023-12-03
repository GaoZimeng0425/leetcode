/*
 * @lc app=leetcode.cn id=1846 lang=typescript
 *
 * [1846] 减小和重新排列数组后的最大元素
 */

// @lc code=start
function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
	arr.sort((a, b) => a - b)
	arr[0] = 1
	let i = 1
	for (; i < arr.length; i++) {
		arr[i] = Math.min(arr[i], arr[i - 1] + 1)
	}
	return arr[i - 1]
};
// @lc code=end

