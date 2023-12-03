/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (32.27%)
 * Likes:    2883
 * Dislikes: 0
 * Total Accepted:    414.6K
 * Total Submissions: 1.3M
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let max: string = ''
  for (let i = 0; i < s.length; i++) {
    const c: string = s[i]
    let curMax: string = c
    let next: number = i + 1
    let prev: number = i - 1
    if (c === s[next]) {
      curMax += s[next++]
    }
    if (c === s[prev]) {
      curMax += s[prev--]
    }
    if (curMax.length > max.length) max = curMax
    while (next < s.length && prev >= 0) {
      if (s[next] !== s[prev]) {
        break
      } else {
        curMax = `${s[next]}${curMax}${s[next]}`
        if (curMax.length > max.length) max = curMax
      }
      prev--
      next++
    }
  }
  return max
};
// @lc code=end

