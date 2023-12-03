/*
 * @lc app=leetcode.cn id=1221 lang=typescript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
function balancedStringSplit(s: string): number {
	let p = 0, r = 0
	for (const char of s) {
		if (char === 'R') p++
		else p--
		if (p === 0) r++
	}
	return r
};
// @lc code=end

