/*
 * @lc app=leetcode.cn id=2000 lang=typescript
 *
 * [2000] 反转单词前缀
 */

// @lc code=start
function reversePrefix(word: string, ch: string): string {
  const list: string[] = []
  for (let i = 0; i < word.length; i++) {
    const element = word[i]
    list.push(element)
    if (element === ch) {
      return list.reverse().join('') + word.slice(i + 1)
    }
  }
  return word
}
// @lc code=end
