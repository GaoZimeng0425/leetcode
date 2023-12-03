/*
 * @lc app=leetcode.cn id=2697 lang=typescript
 * @lcpr version=21914
 *
 * [2697] 字典序最小回文串
 */

// @lc code=start
function makeSmallestPalindrome(s: string): string {
  const { length } = s
  const list: string[] = Array.from(s)
  for (let i = 0; i < length / 2; i++) {
    const [start, end] = [list.at(i)!, list.at(-1 - i)!]
    if (start === end) continue
    if (start < end) {
      list[length - 1 - i] = start
    } else {
      list[i] = end
    }
  }
  return list.join('')
}
// @lc code=end

/*
// @lcpr case=start
// "egcfe"\n
// @lcpr case=end

// @lcpr case=start
// "abcd"\n
// @lcpr case=end

// @lcpr case=start
// "seven"\n
// @lcpr case=end

 */
