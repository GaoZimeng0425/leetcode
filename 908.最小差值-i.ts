/*
 * @Author: gaozimeng
 * @Date: 2021-05-18 10:58:51
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-18 11:05:09
 * @Description: Do not edit
 * @FilePath: /ssr/Users/gaozimeng/.leetcode/908.最小差值-i.ts
 */
/*
 * @lc app=leetcode.cn id=908 lang=typescript
 *
 * [908] 最小差值 I
 *
 * https://leetcode-cn.com/problems/smallest-range-i/description/
 *
 * algorithms
 * Easy (68.98%)
 * Likes:    69
 * Dislikes: 0
 * Total Accepted:    18.5K
 * Total Submissions: 26.7K
 * Testcase Example:  '[1]\n0'
 *
 * 给你一个整数数组 A，请你给数组中的每个元素 A[i] 都加上一个任意数字 x （-K <= x <= K），从而得到一个新数组 B 。
 * 
 * 返回数组 B 的最大值和最小值之间可能存在的最小差值。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：A = [1], K = 0
 * 输出：0
 * 解释：B = [1]
 * 
 * 
 * 示例 2：
 * 
 * 输入：A = [0,10], K = 2
 * 输出：6
 * 解释：B = [2,8]
 * 
 * 
 * 示例 3：
 * 
 * 输入：A = [1,3,6], K = 3
 * 输出：0
 * 解释：B = [3,3,3] 或 B = [4,4,4]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 10000
 * 0 <= A[i] <= 10000
 * 0 <= K <= 10000
 * 
 * 
 */

// @lc code=start
function smallestRangeI(nums: number[], k: number): number {
  let max = nums[0]
  let min = nums[0]
  nums.forEach(n => {
    max = Math.max(max, n)
    min = Math.min(min, n)
  })
  return Math.max(0, (max - min) - k * 2)
};
// @lc code=end

