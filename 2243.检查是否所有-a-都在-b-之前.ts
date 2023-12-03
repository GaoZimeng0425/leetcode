/*
 * @lc app=leetcode.cn id=2243 lang=typescript
 *
 * [2243] 计算字符串的数字和
 */

// @lc code=start
const acc = (str: string) => `${str.split('').reduce((acc, cur) => acc + ~~cur, 0)}`

function digitSum(s: string, k: number): string {
  if (s.length <= k) return s

  let result = ''

  while (s.length) {
    result += acc(s.slice(0, k))
    s = s.slice(k)
  }

  return digitSum(result, k)
}
// @lc code=end
