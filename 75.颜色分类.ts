/*
 * @Author: gaozimeng
 * @Date: 2020-08-17 11:45:11
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-08-01 17:45:04
 * @Description: Do not edit
 * @FilePath: /editor/Users/gaozimeng/.leetcode/75.颜色分类.ts
 */
/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const swap = (n1, n2) => [nums[n1], nums[n2]] = [nums[n2], nums[n1]]
  let p0 = 0
  let p1 = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num === 0) {
      swap(p0, i)
      p0++
      p1++
    } if (num === 1) {
      swap(p1, i)
      p1++
    }
  }
};
// @lc code=end

