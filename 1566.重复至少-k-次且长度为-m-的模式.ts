/*
 * @lc app=leetcode.cn id=1566 lang=typescript
 *
 * [1566] 重复至少 K 次且长度为 M 的模式
 */

// @lc code=start
function containsPattern(arr: number[], m: number, k: number): boolean {
	const map: Map<string, number> = new Map()
	k = k - 1
	for (let i = 0; i < arr.length - m; i++) {
		const key = arr.slice(i, i + m).join('')
		const count = map.get(key) ?? 0
		if (count === k) return true
		map.set(key, count + 1)
	}
	return false
};

// @lc code=end

