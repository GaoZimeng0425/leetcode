/*
 * @Author: gaozimeng
 * @Date: 2021-05-08 22:41:31
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-08 22:48:59
 * @Description: Do not edit
 * @FilePath: /ssr/Users/gaozimeng/.leetcode/693.交替位二进制数.ts
 */
/*
 * @lc app=leetcode.cn id=693 lang=typescript
 *
 * [693] 交替位二进制数
 *
 * https://leetcode-cn.com/problems/binary-number-with-alternating-bits/description/
 *
 * algorithms
 * Easy (60.70%)
 * Likes:    98
 * Dislikes: 0
 * Total Accepted:    22.3K
 * Total Submissions: 36.6K
 * Testcase Example:  '5'
 *
 * 给定一个正整数，检查它的二进制表示是否总是 0、1 交替出现：换句话说，就是二进制表示中相邻两位的数字永不相同。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 5
 * 输出：true
 * 解释：5 的二进制表示是：101
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 7
 * 输出：false
 * 解释：7 的二进制表示是：111.
 * 
 * 示例 3：
 * 
 * 
 * 输入：n = 11
 * 输出：false
 * 解释：11 的二进制表示是：1011.
 * 
 * 示例 4：
 * 
 * 
 * 输入：n = 10
 * 输出：true
 * 解释：10 的二进制表示是：1010.
 * 
 * 示例 5：
 * 
 * 
 * 输入：n = 3
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
function hasAlternatingBits(n: number): boolean {
  let t
  while (n > 0) {
    const pop = n % 2
    if (t === pop) return false
    t = pop
    n = (n / 2) | 0
  }
  return true
};
// @lc code=end

