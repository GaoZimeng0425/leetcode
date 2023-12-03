/*
 * @Author: gaozimeng
 * @Date: 2021-05-21 10:53:36
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-21 11:14:36
 * @Description: Do not edit
 * @FilePath: /vite/Users/gaozimeng/.leetcode/917.仅仅反转字母.ts
 */
/*
 * @lc app=leetcode.cn id=917 lang=typescript
 *
 * [917] 仅仅反转字母
 *
 * https://leetcode-cn.com/problems/reverse-only-letters/description/
 *
 * algorithms
 * Easy (56.18%)
 * Likes:    80
 * Dislikes: 0
 * Total Accepted:    26.2K
 * Total Submissions: 46.3K
 * Testcase Example:  '"ab-cd"'
 *
 * 给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入："ab-cd"
 * 输出："dc-ba"
 * 
 * 
 * 示例 2：
 * 
 * 输入："a-bC-dEf-ghIj"
 * 输出："j-Ih-gfE-dCba"
 * 
 * 
 * 示例 3：
 * 
 * 输入："Test1ng-Leet=code-Q!"
 * 输出："Qedo1ct-eeLg=ntse-T!"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * S.length <= 100
 * 33 <= S[i].ASCIIcode <= 122 
 * S 中不包含 \ or "
 * 
 * 
 */

// @lc code=start
function reverseOnlyLetters(s: string): string {
  const isLetter = (s) => /[a-z]/i.test(s)
  let result = []
  let left = 0
  let right = s.length - 1
  while (left <= right) {
    let lv = s[left]
    let rv = s[right]
    if (isLetter(lv) && isLetter(rv)) {
      result[left] = rv
      result[right] = lv
      left++
      right--
    } else if (isLetter(lv)) {
      result[right] = rv
      right--
    } else {
      result[left] = lv
      left++
    }
  }
  return result.join('')
};
// @lc code=end

