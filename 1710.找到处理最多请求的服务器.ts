/*
 * @lc app=leetcode.cn id=1829 lang=typescript
 *
 * [1710] 卡车上的最大单元数
 */

// @lc code=start
function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => a[1] - b[1])
  let result = 0
  while (true) {
    const curr = boxTypes.pop()
    if (!curr) return result
    const [count, unit] = curr
    if (truckSize >= count) {
      result += count * unit
      truckSize -= count
    } else {
      result += truckSize * unit
      return result
    }
  }
}

const list = [
  [1, 3],
  [5, 5],
  [2, 5],
  [4, 2],
  [4, 1],
  [3, 1],
  [2, 2],
  [1, 3],
  [2, 5],
  [3, 2]
]
const a = maximumUnits(list, 35)
console.log('[高子蒙] : file: 1710.找到处理最多请求的服务器.ts:27 :  a:', a)
// @lc code=end
