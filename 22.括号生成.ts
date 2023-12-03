/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (76.46%)
 * Likes:    1733
 * Dislikes: 0
 * Total Accepted:    261.4K
 * Total Submissions: 339.1K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：["()"]
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
const genSingle = (n) => '()'.repeat(n)
const genMultiple = (n) => '('.repeat(n) + ')'.repeat(n)
function generateParenthesis(n: number): string[] {
  const result: string[] = []
  for (let i = 0; i < n; i++) {
    let c = n - i
    
  }
  return result
};
// @lc code=end

