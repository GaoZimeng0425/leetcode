/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let result: number = 1
  let pos: number = 0
  while (pos < nums.length - 1) {
    const next = pos + 1
    if (nums[pos] !== nums[next]) {
      nums[result++] = nums[next]
    }
    pos++
  }
  return result
 };
// function removeDuplicates(nums: number[]): number {
//   let pos = 0
//   let next
//   while (pos < nums.length - 1) {
//     next = pos + 1
//     if (nums[next] === nums[pos]) {
//       nums.splice(pos, 1)
//     } else {
//       pos++
//     }
//   }
//   return nums.length
//  };
// @lc code=end

