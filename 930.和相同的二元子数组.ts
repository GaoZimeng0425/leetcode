/*
 * @lc app=leetcode.cn id=930 lang=typescript
 *
 * [930] 和相同的二元子数组
 */

// @lc code=start
function numSubarraysWithSum(nums: number[], goal: number): number {
  const map: Map<number, number> = new Map()
  let sum = 0
  let r = 0
  for (const num of nums) {
		map.set(sum, (map.get(sum) || 0) + 1)
		sum += num
		r += map.get(sum - goal) ?? 0
  }
	return r
}
// @lc code=end
