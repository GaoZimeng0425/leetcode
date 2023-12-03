/*
 * @Author: gaozimeng
 * @Date: 2021-05-03 10:09:12
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-03 10:18:56
 * @Description: Do not edit
 * @FilePath: /ts-axios/Users/gaozimeng/.leetcode/7.整数反转.ts
 */
/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (34.72%)
 * Likes:    2745
 * Dislikes: 0
 * Total Accepted:    674.9K
 * Total Submissions: 1.9M
 * Testcase Example:  '123'
 *
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：x = 123
 * 输出：321
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：x = -123
 * 输出：-321
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：x = 120
 * 输出：21
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：x = 0
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -2^31 
 * 
 * 
 */

// @lc code=start
const max = Math.pow(2, 31)
const min = Math.pow(-2, 31)
function reverse(x: number): number {
  let result = 0
  let pop
  while (x !== 0) {
    pop = x % 10
    x = x / 10 | 0
    result = result * 10 + pop
  }
  return result >= max || result <= min ? 0 : result
};
// @lc code=end

