/*
 * @lc app=leetcode.cn id=459 lang=typescript
 *
 * [459] 重复的子字符串
 *
 * https://leetcode-cn.com/problems/repeated-substring-pattern/description/
 *
 * algorithms
 * Easy (51.23%)
 * Likes:    483
 * Dislikes: 0
 * Total Accepted:    67.2K
 * Total Submissions: 131.6K
 * Testcase Example:  '"abab"'
 *
 * 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "abab"
 * 
 * 输出: True
 * 
 * 解释: 可由子字符串 "ab" 重复两次构成。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: "aba"
 * 
 * 输出: False
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: "abcabcabcabc"
 * 
 * 输出: True
 * 
 * 解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)
 * 
 * 
 */

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
  const n: number = s.length
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      let m = true
      console.log(i)
      for (let j = 1; j < i; j++) {
        if (s.slice(0, i) !== s.slice(i * j, i * j + i)) {
          m = false
          break
        }
      }
      if (m) return m
    }
  }
  return false
};
// @lc code=end

