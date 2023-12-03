/*
 * @lc app=leetcode.cn id=844 lang=typescript
 * @lcpr version=21912
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
const compare = (s: string) => {
  const result = []
  for (const str of s) {
    if (str === '#') {
      result.pop()
    } else {
      result.push(str)
    }
  }
  return result.join('')
}

function backspaceCompare(s: string, t: string): boolean {
  return compare(s) === compare(t)
}
// @lc code=end

/*
// @lcpr case=start
// "ab#c"\n"ad#c"\n
// @lcpr case=end

// @lcpr case=start
// "ab##"\n"c#d#"\n
// @lcpr case=end

// @lcpr case=start
// "a#c"\n"b"\n
// @lcpr case=end

 */
