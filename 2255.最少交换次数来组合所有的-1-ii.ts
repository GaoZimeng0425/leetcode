/*
 * @lc app=leetcode.cn id=2255 lang=typescript
 *
 * [2255] 统计是给定字符串前缀的字符串数目
 */

// @lc code=start
const prefix = (word: string, prefix: string) => {
  for (let i = 0; i < prefix.length; i++) {
    if (word[i] !== prefix[i]) return false
  }
  return true
}
const countPrefixes = (words: string[], s: string): number =>
  words.filter((word) => s.startsWith(word)).length

// @lc code=end
