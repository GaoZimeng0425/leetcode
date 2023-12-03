/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
// function lengthOfLastWord(s: string): number {
//   return s.trim().split(' ').slice(-1)[0].length
// };
function lengthOfLastWord(s: string): number {
  let end = s.length - 1
  while (end >= 0 && s[end] === ' ') end--
  if (end < 0) return 0
  let start = end - 1
  while (start >= 0 && s[start] !== ' ') start--
  return end - start
};
// @lc code=end

