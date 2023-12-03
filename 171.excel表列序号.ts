/*
 * @lc app=leetcode.cn id=171 lang=typescript
 *
 * [171] Excel表列序号
 */

// @lc code=start
function titleToNumber(s: string): number {
  let length: number = s.length
  let ans = 0
  let result: number = 0
  while (--length >= 0) {
    let str: string = s[length]
    result += (str.charCodeAt(0) - 64) * Math.pow(26, ans)
    ans++
  }
  return result
};
// @lc code=end

