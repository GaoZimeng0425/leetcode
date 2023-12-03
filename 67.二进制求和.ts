/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  let result: string[] = []
  let add = 0
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let a1 = parseInt(a[i]) || 0
    let b1 = parseInt(b[j]) || 0
    const cur = a1 + b1 + add
    add = cur > 1 ? 1 : 0
    result.unshift(`${cur % 2}`)
  }
  if (add) result.unshift('1')
  return result.join('')
};
// @lc code=end

