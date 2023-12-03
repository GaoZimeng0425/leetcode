/*
 * @lc app=leetcode.cn id=401 lang=typescript
 *
 * [401] 二进制手表
 */

// @lc code=start
const reg = /1/g
function readBinaryWatch(turnedOn: number): string[] {
  const result: string[] = []
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      const hCount = h.toString(2).match(reg)?.length ?? 0
      const mCount = m.toString(2).match(reg)?.length ?? 0
      const momentString = `${m}`.padStart(2, '0')
      if (hCount + mCount === turnedOn) {
        result.push(`${h}:${momentString}`)
      }
    }
  }
  return result
}
// @lc code=end
