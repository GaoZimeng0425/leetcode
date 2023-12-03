/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(str: string): number {
  const symbol: string = '-+'
  let ans: number = 0
  let result: number = 0
  while (ans < str.length) {
    if (str[ans] === ' ') {
      ans++
    } else {
      break
    }
  }
  let s = symbol[symbol.indexOf(str[ans])]
  if (s) ans++
  while (ans < str.length) {
    let num: number | string = str[ans]
    num = parseInt(num)
    if (Number.isInteger(num)) {
      result = result * 10 + num
      ans++
    } else {
      break
    }
  }
  if (result >= Math.pow(2, 31)) {
    result = Math.pow(2, 31) - 1
    if (s === '-') return (result * -1) - 1
    return result
  }
  if (s === '-') return (result * -1)
  return result
};
// @lc code=end

