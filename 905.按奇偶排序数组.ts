/*
 * @Author: gaozimeng
 * @Date: 2021-05-18 10:40:59
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-18 10:57:00
 * @Description: Do not edit
 * @FilePath: /ssr/Users/gaozimeng/.leetcode/905.按奇偶排序数组.ts
 */
/*
 * @lc app=leetcode.cn id=905 lang=typescript
 *
 * [905] 按奇偶排序数组
 *
 * https://leetcode-cn.com/problems/sort-array-by-parity/description/
 *
 * algorithms
 * Easy (69.43%)
 * Likes:    207
 * Dislikes: 0
 * Total Accepted:    52.8K
 * Total Submissions: 75.4K
 * Testcase Example:  '[3,1,2,4]'
 *
 * 给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。
 * 
 * 你可以返回满足此条件的任何数组作为答案。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：[3,1,2,4]
 * 输出：[2,4,3,1]
 * 输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= A.length <= 5000
 * 0 <= A[i] <= 5000
 * 
 * 
 */

// @lc code=start
const swap = (list, x, y) => [list[x], list[y]] = [list[y], list[x]]
function sortArrayByParity(nums: number[]): number[] {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let l = nums[left] % 2
    let r = nums[right] % 2
    if (l === 1 && r === 0) {
      swap(nums, left, right)
    }
    l === 0 && left++
    r === 1 && right--
  }
  return nums
}
// function sortArrayByParity(nums: number[]): number[] {
//   return nums.reduce((r, n) => {
//     n % 2 ? r.push(n) : r.unshift(n)
//     return r
//   }, [])
// };
// @lc code=end

