/*
 * @Author: gaozimeng
 * @Date: 2021-05-26 10:22:09
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-26 10:54:08
 * @Description: Do not edit
 * @FilePath: /webpack/Users/gaozimeng/.leetcode/1190.反转每对括号间的子串.ts
 */
/*
 * @lc app=leetcode.cn id=1190 lang=typescript
 *
 * [1190] 反转每对括号间的子串
 *
 * https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses/description/
 *
 * algorithms
 * Medium (56.29%)
 * Likes:    111
 * Dislikes: 0
 * Total Accepted:    18.9K
 * Total Submissions: 30.2K
 * Testcase Example:  '"(abcd)"'
 *
 * 给出一个字符串 s（仅含有小写英文字母和括号）。
 * 
 * 请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。
 * 
 * 注意，您的结果中 不应 包含任何括号。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：s = "(abcd)"
 * 输出："dcba"
 * 
 * 
 * 示例 2：
 * 
 * 输入：s = "(u(love)i)"
 * 输出："iloveu"
 * 
 * 
 * 示例 3：
 * 
 * 输入：s = "(ed(et(oc))el)"
 * 输出："leetcode"
 * 
 * 
 * 示例 4：
 * 
 * 输入：s = "a(bcdefghijkl(mno)p)q"
 * 输出："apmnolkjihgfedcbq"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= s.length <= 2000
 * s 中只有小写英文字母和括号
 * 我们确保所有括号都是成对出现的
 * 
 * 
 */

// @lc code=start
function reverseParentheses(s: string): string {
  const stack = []
  let str = ''
  for (const letter of s) {
    if (letter === ')') {
      str = str.split('').reverse().join('')
      str = stack.pop() + str
    } else if (letter === '(') {
      stack.push(str)
      str = ''
    } else {
      str += letter
    }
  }
  return str
}
// function reverseParentheses(s: string): string {
//   const stack = []
//   const stringList = s.split('')
//   for (let index = 0; index < stringList.length; index++) {
//     const letter = stringList[index]
//     if (letter === ')') {
//       const [start, end] = [stack.pop(), index]
//       stringList.splice(end, 1)
//       stringList.splice(start, 1)
//       const temp = stringList.splice(start, end - start - 1).reverse()
//       stringList.splice(start, 0, ...temp)
//       index -= 2
//     }
//     if (letter === '(') {
//       stack.push(index)
//     }
//   }
//   return stringList.join('')
// };
// @lc code=end

