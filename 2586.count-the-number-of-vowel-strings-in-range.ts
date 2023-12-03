/*
 * @lc app=leetcode.cn id=2586 lang=typescript
 * @lcpr version=21917
 *
 * [2586] 统计范围内的元音字符串数
 */

// @lc code=start
const a = ['a', 'e', 'i', 'o', 'u']
function vowelStrings(words: string[], left: number, right: number): number {
  let count = 0
  for (let i = left; i <= right; i++) {
    const word = words[i]
    if (!a.includes(word.at(0)!)) continue
    if (!a.includes(word.at(-1)!)) continue
    count++
  }
  return count
}
// @lc code=end

/*
// @lcpr case=start
// ["are","amy","u"]\n0\n2\n
// @lcpr case=end

// @lcpr case=start
// ["hey","aeo","mu","ooo","artro"]\n1\n4\n
// @lcpr case=end

 */
