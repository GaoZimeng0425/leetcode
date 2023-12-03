/*
 * @lc app=leetcode.cn id=2490 lang=typescript
 * @lcpr version=21909
 *
 * [2490] 回环句
 */

// @lc code=start
function isCircularSentence(sentence: string): boolean {
  const words = sentence.split(' ')
  for (let i = 0; i < words.length; i++) {
    const [cur, next] = [words[i], i + 1 === words.length ? words[0] : words[i + 1]]
    if (cur.at(-1) !== next.at(0)) return false
  }
  return true
}
// @lc code=end

/*
// @lcpr case=start
// "leetcode exercises sound delightful"\n
// @lcpr case=end

// @lcpr case=start
// "eetcode"\n
// @lcpr case=end

// @lcpr case=start
// "Leetcode is cool"\n
// @lcpr case=end

 */
