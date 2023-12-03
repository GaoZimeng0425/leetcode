/*
 * @Author: gaozimeng
 * @Date: 2021-05-10 21:57:05
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-10 22:30:00
 * @Description: Do not edit
 * @FilePath: /ssr/Users/gaozimeng/.leetcode/697.数组的度.ts
 */
/*
 * @lc app=leetcode.cn id=697 lang=typescript
 *
 * [697] 数组的度
 *
 * https://leetcode-cn.com/problems/degree-of-an-array/description/
 *
 * algorithms
 * Easy (54.84%)
 * Likes:    334
 * Dislikes: 0
 * Total Accepted:    59.7K
 * Total Submissions: 98.4K
 * Testcase Example:  '[1,2,2,3,1]'
 *
 * 给定一个非空且只包含非负数的整数数组 nums，数组的度的定义是指数组里任一元素出现频数的最大值。
 * 
 * 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：[1, 2, 2, 3, 1]
 * 输出：2
 * 解释：
 * 输入数组的度是2，因为元素1和2的出现频数最大，均为2.
 * 连续子数组里面拥有相同度的有如下所示:
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * 最短连续子数组[2, 2]的长度为2，所以返回2.
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：[1,2,2,3,1,4,2]
 * 输出：6
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * nums.length 在1到 50,000 区间范围内。
 * nums[i] 是一个在 0 到 49,999 范围内的整数。
 * 
 * 
 */

// @lc code=start
function findShortestSubArray(nums: number[]): number {
  let max = 0
  let hash = {}
  let result = Number.MAX_SAFE_INTEGER
  nums.forEach((n, i) => {
    let item = hash[n] || (hash[n] = [0, i])

    item[0] += 1

    const [ count, index ] = item
    const length = i - index + 1
    if (count > max) {
      result = length
      max = count
    } else if (count === max) {
      result = Math.min(length, result)
    }
  })
  return result
};
// @lc code=end

