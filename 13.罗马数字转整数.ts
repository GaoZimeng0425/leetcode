/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  const hashMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let length: number = s.length - 1
  let result: number = 0
  let previous: string | null = null

  while (length >= 0) {
    const current: string = s[length--]
    const count = hashMap[current]
    if (previous === current || result < count) {
      result += count
    } else {
      result -= count
    }
    previous = current
  }
  return result
};
// @lc code=end

