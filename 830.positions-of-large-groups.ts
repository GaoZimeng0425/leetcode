/*
 * @lc app=leetcode.cn id=830 lang=typescript
 * @lcpr version=21913
 *
 * [830] 较大分组的位置
 */

// @lc code=start
function largeGroupPositions(s: string): number[][] {
  let i = 0
  const result: number[][] = []
  while (i < s.length) {
    const cur = s[i]
    let index = i
    let length = 0
    i++
    while (i < s.length) {
      if (s[i] === cur) {
        i++
        length++
      } else {
        break
      }
    }
    if (length >= 2) {
      result.push([index, index + length])
    }
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// "abbxxxxzzy"\n
// @lcpr case=end

// @lcpr case=start
// "abc"\n
// @lcpr case=end

// @lcpr case=start
// "abcdddeeeeaabbbcd"\n
// @lcpr case=end

// @lcpr case=start
// "aba"\n
// @lcpr case=end

 */
