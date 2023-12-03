/*
 * @Author: gaozimeng
 * @Date: 2021-08-01 17:49:16
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-08-01 18:08:57
 * @Description: Do not edit
 * @FilePath: /editor/Users/gaozimeng/.leetcode/1518.换酒问题.ts
 */
/*
 * @lc app=leetcode.cn id=1518 lang=typescript
 *
 * [1518] 换酒问题
 */

// @lc code=start
function numWaterBottles(numBottles: number, numExchange: number): number {
	let emptyBottles = numBottles
	let changedBottles = 0
	while (emptyBottles >= numExchange) {
		const changedCount = ~~(emptyBottles / numExchange)
		changedBottles += changedCount
		emptyBottles -= changedCount * (numExchange - 1)
	}
	return numBottles + changedBottles
};
// @lc code=end

