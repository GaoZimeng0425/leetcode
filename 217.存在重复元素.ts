/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 *
 * https://leetcode-cn.com/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (53.25%)
 * Likes:    347
 * Dislikes: 0
 * Total Accepted:    219.3K
 * Total Submissions: 399.3K
 * Testcase Example:  '[1,2,3,1]'
 *
 * 给定一个整数数组，判断是否存在重复元素。
 * 
 * 如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3,1]
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: [1,2,3,4]
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: [1,1,1,3,3,4,3,2,4,2]
 * 输出: true
 * 
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  let map = new Map()
  let {length} = nums
  let i = 0
  while (i < length) {
    const c = nums[i]
    if (map.has(c)) {
      return true
    }
    map.set(c, true)
    i++
  }
  return false
};
// @lc code=end

