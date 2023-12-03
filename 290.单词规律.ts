/*
 * @lc app=leetcode.cn id=290 lang=typescript
 *
 * [290] 单词规律
 *
 * https://leetcode-cn.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (43.81%)
 * Likes:    321
 * Dislikes: 0
 * Total Accepted:    70.2K
 * Total Submissions: 153.4K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
 * 
 * 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
 * 
 * 示例1:
 * 
 * 输入: pattern = "abba", str = "dog cat cat dog"
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入:pattern = "abba", str = "dog cat cat fish"
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: pattern = "aaaa", str = "dog cat cat dog"
 * 输出: false
 * 
 * 示例 4:
 * 
 * 输入: pattern = "abba", str = "dog dog dog dog"
 * 输出: false
 * 
 * 说明:
 * 你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。    
 * 
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
  const m1 = {}
  const m2 = {}
  const l1: string[] = s.split(' ')
  if (l1.length !== pattern.length) return false
  for (let i = 0; i < l1.length; i++) {
    const c1 = l1[i]
    const c2 = pattern[i]
    if (m1[c1] && m1[c1] !== c2 || m2[c2] && m2[c2] !== c1) {
      return false
    }
    m1[c1] = c2
    m2[c2] = c1
  }
  return true
};
// @lc code=end

