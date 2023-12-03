/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let temp: string[] = [s[0]]
  let max:number = 0
  let start:number = 0
  let end:number = 1
  let l:number
  for (let i = 1; i < s.length; i++) {
    const str = s[i]
    if ((l = temp.findIndex(s => s === str)) !== -1) {
      start += l
    } else {
      max++
    }
  }
};
// @lc code=end

