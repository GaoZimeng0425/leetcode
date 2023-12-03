/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 *
 * https://leetcode-cn.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (51.85%)
 * Likes:    356
 * Dislikes: 0
 * Total Accepted:    109.2K
 * Total Submissions: 209.2K
 * Testcase Example:  '"11"\n"123"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * num1 和num2 的长度都小于 5100
 * num1 和num2 都只包含数字 0-9
 * num1 和num2 都不包含任何前导零
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式
 * 
 * 
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  let result: string = ''
  let add = 0
  let l1: number = num1.length
  let l2: number = num2.length
  while (l1 > 0 || l2 > 0 || add === 1) {
    const s1 = parseInt(num1[--l1]) || 0
    const s2 = parseInt(num2[--l2]) || 0
    const c = s1 + s2 + add
    result = (c % 10).toString() + result
    add = c >= 10 ? 1 : 0
  }
  return result
};
// @lc code=end

