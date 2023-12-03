/*
 * @lc app=leetcode.cn id=643 lang=typescript
 *
 * [643] 子数组最大平均数 I
 *
 * https://leetcode-cn.com/problems/maximum-average-subarray-i/description/
 *
 * algorithms
 * Easy (39.34%)
 * Likes:    183
 * Dislikes: 0
 * Total Accepted:    55.6K
 * Total Submissions: 122.4K
 * Testcase Example:  '[1,12,-5,-6,50,3]\n4'
 *
 * 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：[1,12,-5,-6,50,3], k = 4
 * 输出：12.75
 * 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 k n 
 * 所给数据范围 [-10,000，10,000]。
 * 
 * 
 */

// @lc code=start
function findMaxAverage(nums: number[], k: number): number {
  let max = nums[0]
  let { length } = nums
  let sum = max
  let i = 0
  while (++i < length) {
    const count = nums[i]
    if (i < k) {
      max += count
      sum = max
    } else {
      sum = sum + count - nums[i - k]
      max = Math.max(max, sum)
    }
  }
  return max / k
};
// @lc code=end

