/*
 * @Author: gaozimeng
 * @Date: 2021-05-05 10:07:24
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-05 11:52:36
 * @Description: Do not edit
 * @FilePath: /ts-axios/Users/gaozimeng/.leetcode/740.删除与获得点数.ts
 */
/*
 * @lc app=leetcode.cn id=740 lang=typescript
 *
 * [740] 删除与获得点数
 *
 * https://leetcode-cn.com/problems/delete-and-earn/description/
 *
 * algorithms
 * Medium (52.22%)
 * Likes:    265
 * Dislikes: 0
 * Total Accepted:    15.5K
 * Total Submissions: 27.4K
 * Testcase Example:  '[3,4,2]'
 *
 * 给你一个整数数组 nums ，你可以对它进行一些操作。
 * 
 * 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除每个等于 nums[i] - 1 或 nums[i]
 * + 1 的元素。
 * 
 * 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [3,4,2]
 * 输出：6
 * 解释：
 * 删除 4 获得 4 个点数，因此 3 也被删除。
 * 之后，删除 2 获得 2 个点数。总共获得 6 个点数。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [2,2,3,3,3,4]
 * 输出：9
 * 解释：
 * 删除 3 获得 3 个点数，接着要删除两个 2 和 4 。
 * 之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
 * 总共获得 9 个点数。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 
 * 
 */

// @lc code=start
function rob(nums: number[]): number {
  let list = []
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    max = Math.max((list[i - 2] || 0) + (nums[i] || 0), list[i - 1] || 0)
    list[i] = max
  }
  return max
}

function deleteAndEarn(nums: number[]): number {
  let list = []
  nums.forEach(n => list[n - 1] = n + (list[n - 1] || 0))
  return rob(list)
};
// @lc code=end

