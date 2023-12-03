/*
 * @Author: gaozimeng
 * @Date: 2021-05-15 11:47:00
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-15 13:14:27
 * @Description: Do not edit
 * @FilePath: /vuessr/Users/gaozimeng/.leetcode/31.下一个排列.ts
 */
/*
 * @lc app=leetcode.cn id=31 lang=typescript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (35.49%)
 * Likes:    1110
 * Dislikes: 0
 * Total Accepted:    163.9K
 * Total Submissions: 444.7K
 * Testcase Example:  '[1,2,3]'
 *
 * 实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 
 * 必须 原地 修改，只允许使用额外常数空间。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[1,3,2]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,2,1]
 * 输出：[1,2,3]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1,1,5]
 * 输出：[1,5,1]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：nums = [1]
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  const swap = (x, y) => [nums[x], nums[y]] = [nums[y], nums[x]]
  let left = nums.length - 2
  while (left >= 0 && nums[left] >= nums[left + 1]) {
    left--
  }
  let j = nums.length - 1
  if (left >= 0) {
    while (j >= 0 && nums[left] >= nums[j]) {
      j--
    }
    swap(left, j)
  }
  for (let index = 0; index < Math.floor((nums.length - left) / 2); index++) {
    swap(index + left + 1, nums.length - 1 - index)
  }
};
// @lc code=end

