/*
 * @Author: gaozimeng
 * @Date: 2021-08-03 11:31:12
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-08-03 11:43:37
 * @Description: Do not edit
 * @FilePath: /vue@next/Users/gaozimeng/.leetcode/581.最短无序连续子数组.ts
 */
/*
 * @lc app=leetcode.cn id=581 lang=typescript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
function findUnsortedSubarray(nums: number[]): number {
	let [start, end] = [0, 0]
	let prevIndex = 0
	for (let i = 1; i < nums.length; i++) {
		const current = nums[i]
		const prev = nums[prevIndex]
		if (prev > current) {
			if (start === 0) start = prevIndex
			end = i
		}
		prevIndex = i
	}
	return end - start
};
// @lc code=end

