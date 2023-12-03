/*
 * @lc app=leetcode.cn id=448 lang=typescript
 *
 * [448] 找到所有数组中消失的数字
 *
 * https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/description/
 *
 * algorithms
 * Easy (60.62%)
 * Likes:    711
 * Dislikes: 0
 * Total Accepted:    106K
 * Total Submissions: 166.3K
 * Testcase Example:  '[4,3,2,7,8,2,3,1]'
 *
 * 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
 * 
 * 找到所有在 [1, n] 范围之间没有出现在数组中的数字。
 * 
 * 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
 * 
 * 示例:
 * 
 * 
 * 输入:
 * [4,3,2,7,8,2,3,1]
 * 
 * 输出:
 * [5,6]
 * 
 * 
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
  const n: number = nums.length
  for (const num of nums) {
    nums[(num - 1) % n] += n
  }
  const result: number[] = []
  for (let i = 0; i < n; i++) {
    if (nums[i] <= n) {
      result.push(i + 1)
    }
  }
  return result
};

// @lc code=end

