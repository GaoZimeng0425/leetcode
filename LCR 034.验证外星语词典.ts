/*
 * @lc app=leetcode.cn id=LCR 034 lang=typescript
 * @lcpr version=21913
 *
 * [LCR 034] 验证外星语词典
 */

// @lc code=start
const compare = (l1: number[], l2: number[]): boolean => {
  for (let i = 0; i < l1.length; i++) {
    if (l1[i] < l2[i]) return true
    if (l1[i] > l2[i]) return false
  }
  return l1.length <= l2.length
}
function isAlienSorted(words: string[], order: string): boolean {
  const map = order.split('').reduce((map, char, index) => {
    map.set(char, index)
    return map
  }, new Map<string, number>())

  const list: number[][] = words.map((word) => word.split('').map((char) => map.get(char)!))

  for (let i = 1; i < list.length; i++) {
    const [prev, current] = [list[i - 1], list[i]]
    if (!compare(prev, current)) return false
  }
  return true
}
// @lc code=end

/*
// @lcpr case=start
// ["kuvp","q"]\n"ngxlkthsjuoqcpavbfdermiywz"
// @lcpr case=end

// @lcpr case=start
// ["hello","hello"]\n"hlabcdefgijkmnopqrstuvwxyz"\n
// @lcpr case=end
// @lcpr case=start
// ["word","world","row"]\n"worldabcefghijkmnpqstuvxyz"\n
// @lcpr case=end

// @lcpr case=start
// ["apple","app"]\n"abcdefghijklmnopqrstuvwxyz"\n
// @lcpr case=end

 */
