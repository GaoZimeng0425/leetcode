/*
 * @lc app=leetcode.cn id=2114 lang=typescript
 * @lcpr version=21913
 *
 * [2114] 句子中的最多单词数
 */

// @lc code=start
function mostWordsFound(sentences: string[]): number {
  return Math.max(...sentences.map((s) => s.split(/\s+/).length))
}
// @lc code=end

/*
// @lcpr case=start
// ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]\n
// @lcpr case=end

// @lcpr case=start
// ["please wait", "continue to fight", "continue to win"]\n
// @lcpr case=end

 */
