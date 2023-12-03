/*
 * @Author: gaozimeng
 * @Date: 2020-08-13 10:46:52
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-05 11:25:37
 * @Description: Do not edit
 * @FilePath: /ts-axios/Users/gaozimeng/.leetcode/198.打家劫舍.ts
 */
/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  let map = new Map()
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    max = Math.max(map.get(i - 1) || 0, cur + (map.get(i - 2) || 0))
    map.set(i, max)
  }
  return max
};
// @lc code=end

