/*
 * @Author: gaozimeng
 * @Date: 2021-05-25 10:34:33
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-25 10:52:06
 * @Description: Do not edit
 * @FilePath: /undefined/Users/gaozimeng/.leetcode/942.增减字符串匹配.ts
 */
/*
 * @lc app=leetcode.cn id=942 lang=typescript
 *
 * [942] 增减字符串匹配
 *
 * https://leetcode-cn.com/problems/di-string-match/description/
 *
 * algorithms
 * Easy (72.09%)
 * Likes:    211
 * Dislikes: 0
 * Total Accepted:    20.5K
 * Total Submissions: 28.2K
 * Testcase Example:  '"IDID"'
 *
 * 给定只含 "I"（增大）或 "D"（减小）的字符串 S ，令 N = S.length。
 * 
 * 返回 [0, 1, ..., N] 的任意排列 A 使得对于所有 i = 0, ..., N-1，都有：
 * 
 * 
 * 如果 S[i] == "I"，那么 A[i] < A[i+1]
 * 如果 S[i] == "D"，那么 A[i] > A[i+1]
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入："IDID"
 * 输出：[0,4,1,3,2]
 * 
 * 
 * 示例 2：
 * 
 * 输入："III"
 * 输出：[0,1,2,3]
 * 
 * 
 * 示例 3：
 * 
 * 输入："DDI"
 * 输出：[3,2,0,1]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= S.length <= 10000
 * S 只包含字符 "I" 或 "D"。
 * 
 * 
 */

// @lc code=start
function diStringMatch(s: string): number[] {
  const result = []
  let left = 0
  let right = s.length
  for (let i = 0; i < s.length; i++) {
    const letter = s[i]
    if (letter === 'I') {
      result.push(left++)
    } else {
      result.push(right--)
    }
  }
  return result.concat(left)
};
// @lc code=end

