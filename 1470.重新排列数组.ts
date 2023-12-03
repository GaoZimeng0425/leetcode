/*
 * @lc app=leetcode.cn id=1470 lang=typescript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
// function shuffle(nums: number[], n: number): number[] {
//   let {length} = nums
//   for (let i = 0; i < length; i+=2) {
//     const current = nums[i + n]
//     nums.splice(i + 1, 0, current)
//   }
//   nums.splice(-n, n)
//   return nums
// };

function shuffle(nums: number[], n: number): number[] {
  let list = []
  const nums2 = nums.slice(n)
  for (let i = 0; i < nums2.length; i++) {
    list.push(nums[i], nums2[i])
  }
  return list
}
// @lc code=end

