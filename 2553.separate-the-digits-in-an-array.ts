/*
 * @lc app=leetcode.cn id=2553 lang=typescript
 * @lcpr version=21913
 *
 * [2553] 分割数组中数字的数位
 */

// @lc code=start
const split = (num: number) => {
  const result = []
  while (num > 0) {
    result.unshift(num % 10)
    num = Math.floor(num / 10)
  }
  return result
}
function separateDigits(nums: number[]): number[] {
  const result = []
  for (const num of nums) {
    if (num < 10) {
      result.push(num)
    } else {
      result.push(...split(num))
    }
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// [13,25,83,77]\n
// @lcpr case=end

// @lcpr case=start
// [7,1,3,9]\n
// @lcpr case=end

 */
