/*
 * @lc app=leetcode.cn id=剑指 Offer 58 - I lang=typescript
 * @lcpr version=30102
 *
 * [剑指 Offer 58 - I] 翻转单词顺序
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function reverseMessage(message: string): string {
  const list = message.split(/\s/)
  return list
    .reduce((words, word) => {
      if (word !== '') {
        words.unshift(word)
      }
      return words
    }, [] as string[])
    .join(' ')
}
// @lc code=end

/*
// @lcpr case=start
// "the sky is blue"\n
// @lcpr case=end

// @lcpr case=start
// "  hello world!  "\n
// @lcpr case=end

// @lcpr case=start
// "a good   example"\n
// @lcpr case=end

 */
