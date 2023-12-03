/*
 * @lc app=leetcode.cn id=709 lang=typescript
 *
 * [709] 转换成小写字母
 *
 * https://leetcode-cn.com/problems/to-lower-case/description/
 *
 * algorithms
 * Easy (75.93%)
 * Likes:    148
 * Dislikes: 0
 * Total Accepted:    64.9K
 * Total Submissions: 85.4K
 * Testcase Example:  '"Hello"'
 *
 * 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入: "Hello"
 * 输出: "hello"
 * 
 * 示例 2：
 * 
 * 
 * 输入: "here"
 * 输出: "here"
 * 
 * 示例 3：
 * 
 * 
 * 输入: "LOVELY"
 * 输出: "lovely"
 * 
 * 
 */

// @lc code=start
const min = 'A'.charCodeAt(0)
const max = 'Z'.charCodeAt(0)
const deviation = 'a'.charCodeAt(0) - min
function toLowerCase(str: string): string {
  let result: string = ''
  for (let i = 0; i < str.length; i++) {
    const s = str[i]
    const code = s.charCodeAt(0)
    if (code >= min && code <= max) {
      result += String.fromCodePoint(code + deviation)
    } else {
      result += s
    }
  }
  return result
};
// @lc code=end

