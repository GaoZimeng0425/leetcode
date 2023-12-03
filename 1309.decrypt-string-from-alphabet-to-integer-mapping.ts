/*
 * @lc app=leetcode.cn id=1309 lang=typescript
 * @lcpr version=21917
 *
 * [1309] 解码字母到整数映射
 */

// @lc code=start
function freqAlphabets(s: string): string {
  let end = s.length - 1
  const result: string[] = []
  while (end >= 0) {
    if (s[end] === '#') {
      result.unshift(String.fromCharCode(96 + ~~s.slice(end - 2, end)))
      end -= 3
    } else {
      result.unshift(String.fromCharCode(96 + ~~s[end]))
      end--
    }
  }
  return result.join('')
}
// @lc code=end

/*
// @lcpr case=start
// "10#11#12"\n
// @lcpr case=end

// @lcpr case=start
// "1326#"\n
// @lcpr case=end

 */
