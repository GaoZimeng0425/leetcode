/*
 * @Author: gaozimeng
 * @Date: 2021-05-21 11:36:59
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-21 11:44:03
 * @Description: Do not edit
 * @FilePath: /vite/Users/gaozimeng/.leetcode/922.按奇偶排序数组-ii.ts
 */
/*
 * @lc app=leetcode.cn id=922 lang=typescript
 *
 * [922] 按奇偶排序数组 II
 *
 * https://leetcode-cn.com/problems/sort-array-by-parity-ii/description/
 *
 * algorithms
 * Easy (68.47%)
 * Likes:    205
 * Dislikes: 0
 * Total Accepted:    85.5K
 * Total Submissions: 119.6K
 * Testcase Example:  '[4,2,5,7]'
 *
 * 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
 * 
 * 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
 * 
 * 你可以返回任何满足上述条件的数组作为答案。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：[4,2,5,7]
 * 输出：[4,5,2,7]
 * 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= A.length <= 20000
 * A.length % 2 == 0
 * 0 <= A[i] <= 1000
 * 
 * 
 * 
 * 
 */

// @lc code=start
function sortArrayByParityII(nums: number[]): number[] {
  const result = []
  const odd = []
  const even = []
  nums.forEach(n => {
    if (n % 2) {
      odd.push(n)
    } else {
      even.push(n)
    }
  })
  while (odd.length || even.length) {
    let e = even.shift()
    let o = odd.shift()
    e != null && result.push(e)
    o != null && result.push(o)
  }
  return result
};
// @lc code=end

