/*
 * @lc app=leetcode.cn id=220 lang=typescript
 *
 * [220] 存在重复元素 III
 *
 * https://leetcode-cn.com/problems/contains-duplicate-iii/description/
 *
 * algorithms
 * Medium (26.52%)
 * Likes:    441
 * Dislikes: 0
 * Total Accepted:    55.6K
 * Total Submissions: 194.4K
 * Testcase Example:  '[1,2,3,1]\n3\n0'
 *
 * 给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j])
 * ，同时又满足 abs(i - j)  。
 * 
 * 如果存在则返回 true，不存在返回 false。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3,1], k = 3, t = 0
 * 输出：true
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,0,1,1], k = 1, t = 2
 * 输出：true
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1,5,9,1,5,9], k = 2, t = 3
 * 输出：false
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -2^31 
 * 0 
 * 0 
 * 
 * 
 */

// @lc code=start
function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
  const list: number[][] = []
  nums.forEach((n, i) => {
    nums.forEach((m, j) => {
      list.push([n - m, i - j])
    })
  })
  console.log(`[G] : list`, list)
  return list.some(([count, key]) => {
    return Math.abs(count) <= t && Math.abs(key) <= k
  })
};
// @lc code=end

