/*
 * @Author: gaozimeng
 * @Date: 2021-05-03 10:20:25
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-03 10:47:44
 * @Description: Do not edit
 * @FilePath: /.leetcode/724.寻找数组的中心索引.ts
 */
/*
 * @lc app=leetcode.cn id=724 lang=typescript
 *
 * [724] 寻找数组的中心索引
 *
 * https://leetcode-cn.com/problems/find-pivot-index/description/
 *
 * algorithms
 * Easy (39.12%)
 * Likes:    319
 * Dislikes: 0
 * Total Accepted:    114.1K
 * Total Submissions: 258.3K
 * Testcase Example:  '[1,7,3,6,5,6]'
 *
 * 给你一个整数数组 nums，请编写一个能够返回数组 “中心下标” 的方法。
 * 
 * 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
 * 
 * 如果数组不存在中心下标，返回 -1 。如果数组有多个中心下标，应该返回最靠近左边的那一个。
 * 
 * 注意：中心下标可能出现在数组的两端。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1, 7, 3, 6, 5, 6]
 * 输出：3
 * 解释：
 * 中心下标是 3 。
 * 左侧数之和 (1 + 7 + 3 = 11)，
 * 右侧数之和 (5 + 6 = 11) ，二者相等。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1, 2, 3]
 * 输出：-1
 * 解释：
 * 数组中不存在满足此条件的中心下标。
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [2, 1, -1]
 * 输出：0
 * 解释：
 * 中心下标是 0 。
 * 下标 0 左侧不存在元素，视作和为 0 ；
 * 右侧数之和为 1 + (-1) = 0 ，二者相等。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * nums 的长度范围为 [0, 10000]。
 * 任何一个 nums[i] 将会是一个范围在 [-1000, 1000]的整数。
 * 
 * 
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
  if (!nums.length) return -1
  let index: number = -1
  let left = 0
  let right = nums.reduce((r, x) => r + x)
  while (++index <= nums.length) {
    const current = nums[index]
    right -= current
    if (left === right) return index
    left = (left || 0) + current
  }
  return -1
};
// @lc code=end

