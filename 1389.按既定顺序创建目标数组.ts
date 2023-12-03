/*
 * @Author: gaozimeng
 * @Date: 2021-07-22 11:50:48
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-07-22 11:59:29
 * @Description: Do not edit
 * @FilePath: /editor/Users/gaozimeng/.leetcode/1389.按既定顺序创建目标数组.ts
 */
/*
 * @lc app=leetcode.cn id=1389 lang=typescript
 *
 * [1389] 按既定顺序创建目标数组
 */

// @lc code=start
function createTargetArray(nums: number[], index: number[]): number[] {
  return nums.reduce((r, n, i) => {
    r.splice(index[i], 0, n)
    return r
  }, [])
}

// @lc code=end
