/*
 * @Author: gaozimeng
 * @Date: 2021-08-08 10:22:48
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-08-08 10:30:17
 * @Description: Do not edit
 * @FilePath: /vue/Users/gaozimeng/.leetcode/1137.第-n-个泰波那契数.ts
 */
/*
 * @lc app=leetcode.cn id=1137 lang=typescript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
function tribonacci(n: number): number {
	const list = [0, 1]
	if (n <= 1) return list[n]
	let i = 0
	while (i < n - 1) {
		list[i] = list[i - 1] + list[i - 2]
	}
	return list[n]
};
// @lc code=end

