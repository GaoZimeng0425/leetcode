/*
 * @lc app=leetcode.cn id=485 lang=typescript
 *
 * [485] 最大连续1的个数
 *
 * https://leetcode-cn.com/problems/max-consecutive-ones/description/
 *
 * algorithms
 * Easy (56.78%)
 * Likes:    230
 * Dislikes: 0
 * Total Accepted:    103.2K
 * Total Submissions: 172.1K
 * Testcase Example:  '[1,1,0,1,1,1]'
 *
 * 给定一个二进制数组， 计算其中最大连续 1 的个数。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：[1,1,0,1,1,1]
 * 输出：3
 * 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 输入的数组只包含 0 和 1 。
 * 输入数组的长度是正整数，且不超过 10,000。
 * 
 * 
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0
  let cur = 0
  for (let i = 0; i <= nums.length; i++) {
    cur = nums[i] === 1 ? cur + 1 : 0
    max = Math.max(cur, max)
  }
  return max
};
// @lc code=end

