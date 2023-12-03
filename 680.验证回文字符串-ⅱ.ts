/*
 * @Author: gaozimeng
 * @Date: 2021-05-08 22:10:10
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-08 22:40:55
 * @Description: Do not edit
 * @FilePath: /ssr/Users/gaozimeng/.leetcode/680.验证回文字符串-ⅱ.ts
 */
/*
 * @lc app=leetcode.cn id=680 lang=typescript
 *
 * [680] 验证回文字符串 Ⅱ
 *
 * https://leetcode-cn.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (39.88%)
 * Likes:    349
 * Dislikes: 0
 * Total Accepted:    72.3K
 * Total Submissions: 180.3K
 * Testcase Example:  '"aba"'
 *
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "aba"
 * 输出: True
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: "abca"
 * 输出: True
 * 解释: 你可以删除c字符。
 * 
 * 
 * 注意:
 * 
 * 
 * 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 * 
 * 
 */

// @lc code=start
const validate = (s, l, r) => {
  while (r > l) {
    if (s[r] !== s[l]) {
      return false
    }
    r--
    l++
  }
  return true
}
function validPalindrome(s: string): boolean {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    let lv = s[left]
    let rv = s[right]
    if (lv !== rv) {
      return validate(s, left + 1, right) || validate(s, left, right - 1)
    }
    left++
    right--
  }
  return true
};
// @lc code=end

