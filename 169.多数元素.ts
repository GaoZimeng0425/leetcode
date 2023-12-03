/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
// function majorityElement(nums: number[]): number {
//   let map: cc = {}
//   let max = 0
//   let target = nums[0]
//   for (let i = 0; i < nums.length; i++) {
//     const cur = nums[i]
//     if (!map[cur]) {
//       map[cur] = 1
//     } else {
//       map[cur]++
//       max = Math.max(map[cur], max)
//       if (max === map[cur]) {
//         target = cur
//       }
//     }
//   }
//   return target
// };

function majorityElement(nums: number[]): number {
  let maj = null
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (count === 0) {
      maj = cur
    }
    count += maj === cur ? 1 : -1
  }
  return maj
}

// @lc code=end

