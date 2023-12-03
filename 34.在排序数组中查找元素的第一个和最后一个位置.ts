/*
 * @Author: gaozimeng
 * @Date: 2021-07-20 11:49:31
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-07-20 11:59:54
 * @Description: Do not edit
 * @FilePath: /undefined/Users/gaozimeng/.leetcode/34.在排序数组中查找元素的第一个和最后一个位置.ts
 */
/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let [start, end] = [-1, -1]
	let i = 0
	while (i < nums.length) {
		let cur = nums[i]
		if (cur === target) {
			start = end = i
			while (++i < nums.length) {
				const next = nums[i]
				if (next === target) {
					end = i
				} else {
					break
				}
			}
			return [start, end]
		}
		i++
	}
	return [start, end]
}
// @lc code=end
