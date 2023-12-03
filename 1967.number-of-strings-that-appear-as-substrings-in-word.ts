/*
 * @lc app=leetcode.cn id=1967 lang=typescript
 * @lcpr version=21917
 *
 * [1967] 作为子字符串出现在单词中的字符串数目
 */

// @lc code=start
function numOfStrings(patterns: string[], word: string): number {
  return patterns.filter((t) => word.includes(t)).length
}
// @lc code=end

/*
// @lcpr case=start
// ["a","abc","bc","d"]\n"abc"\n
// @lcpr case=end

// @lcpr case=start
// ["a","b","c"]\n"aaaaabbbbb"\n
// @lcpr case=end

// @lcpr case=start
// ["a","a","a"]\n"ab"\n
// @lcpr case=end

 */
