/*
 * @lc app=leetcode.cn id=1156 lang=typescript
 *
 * [1078] Bigram 分词
 */

// @lc code=start
function findOcurrences(text: string, first: string, second: string): string[] {
  const reuslt: string[] = []
  const words = text.split(' ')
  for (let i = 0; i < words.length; i++) {
    const prev = words[i]
    if (prev === first) {
      const next = words[i + 1]
      if (next === second) reuslt.push(words[i + 2])
    }
  }
  return reuslt.filter((n) => !!n)
}
// @lc code=end
