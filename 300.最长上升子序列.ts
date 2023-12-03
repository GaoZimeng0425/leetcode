/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
// function lengthOfLIS(nums: number[]): number {
//   let start: number = 0
//   let end: number = 1
//   let ans: number = start
//   let max = 0
//   while (end >= start && end < nums.length) {
//     let current: number = nums[ans]
//     let next: number = nums[end]
//     if (current <= next) {
//       console.log(`[G]: functionlengthOfLIS -> current`, current)
//       console.log(`[G]: functionlengthOfLIS -> next`, next)
//       ans++
//       max = Math.max(max, end - start + 1)
//     } else {
//       ans = start = end
//     }
//     end++
//   }
//   return max
// };

function lengthOfLIS(nums: number[]): number {
  let max: number = 0
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i]
    let m = 1
    for (let j = i + 1; j < nums.length; j++) {
      const next = nums[j]
      if (next > temp) {
        m++
        temp = next
      }
    }
    max = Math.max(max, m)
  }
  return max
};
// @lc code=end

