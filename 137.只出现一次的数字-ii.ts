/*
 * @lc app=leetcode.cn id=137 lang=typescript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
// const reduce = (list: Array<number>): number => {
//   return list.reduce((result, n) => {
//     return result += n
//   })
// }
// function singleNumber(nums: number[]): number {
//   const set = new Set(nums)
//   const count = reduce(nums)
//   return (3 * reduce([...set]) - count) / 2
// };

function singleNumber(nums: number[]): number {
  const set = new Set(nums)
  let count = 0
  set.forEach(n => {
    count += n
  })
  return (count * 3 - nums.reduce((r, i) => r + i)) / 2
};
// @lc code=end

