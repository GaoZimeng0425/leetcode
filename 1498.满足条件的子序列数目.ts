/*
 * @lc app=leetcode.cn id=1498 lang=typescript
 *
 * [1498] 满足条件的子序列数目
 */

// @lc code=start
function numSubseq(nums: number[], target: number): number {
	const calc = (n1: number, n2: number) => n1 + n2 <= target
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i]
		let arr = [num1]
    for (let j = i; j < nums.length; j++) {
      const num2 = nums[j]
			arr.push(num2)
			if (!calc(num1, num2)) break
    }
  }
  return result
}
// @lc code=end
