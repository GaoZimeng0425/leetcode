/*
 * @lc app=leetcode.cn id=2535 lang=typescript
 * @lcpr version=21913
 *
 * [2535] 数组元素和与数字和的绝对差
 */

// @lc code=start
const unitsDigit = (num: number): number => {
  const result: number[] = []
  while (num > 0) {
    result.push(num % 10)
    num = Math.floor(num / 10)
  }
  return result.reduce((acc, cur) => acc + cur, 0)
}
function differenceOfSum(nums: number[]): number {
  const sum = nums.reduce((acc, cur) => acc + cur, 0)
  const units = nums.map(unitsDigit)
  const unitsSum = units.reduce((acc, cur) => acc + cur, 0)
  return Math.abs(sum - unitsSum)
}
// @lc code=end

/*
// @lcpr case=start
// [1,15,6,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

 */
