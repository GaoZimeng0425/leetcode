/*
 * @lc app=leetcode.cn id=1935 lang=typescript
 * @lcpr version=21917
 *
 * [1935] 可以输入的最大单词数
 */

// @lc code=start

function canBeTypedWords(text: string, brokenLetters: string): number {
  const t = brokenLetters.split('')
  return text.split(' ').filter((word) => t.every((letter) => !word.includes(letter))).length
}
// @lc code=end

/*
// @lcpr case=start
// "hello world"\n"ad"\n
// @lcpr case=end

// @lcpr case=start
// "leet code"\n"lt"\n
// @lcpr case=end

// @lcpr case=start
// "leet code"\n"e"\n
// @lcpr case=end

 */
