/*
 * @lc app=leetcode.cn id=1191 lang=typescript
 *
 * [1191] K 次串联后最大子数组之和
 */

// @lc code=start
const maxSub = (arr: number[]) => {
	let cur = 0
	let max = 0
	for (const num of arr) {
		cur += num
		max = Math.max(max, cur)
		if (cur < 0) {
			cur = 0
		}
	}
	return max
}
function kConcatenationMaxSum(arr: number[], k: number): number {
	const acc = arr.reduce((a, b) => a + b)
	if (acc > 0) return acc * k
	return maxSub([...arr, ...arr]) / 2
}
// @lc code=end

