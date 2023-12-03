/*
 * @lc app=leetcode.cn id=1217 lang=typescript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const map: Map<number, number[]> = new Map()
  arr1.forEach((n) => map.set(n, (map.get(n) || []).concat(n)))
  const result: number[] = []
  arr2.forEach((n) => {
    const list = map.get(n)!
    map.delete(n)
    result.push(...list)
  })
  const result1: number[] = []
  for (const [i] of map) {
    result1.push(i)
  }
  const l: number[] = result1
    .sort((a, b) => a - b)
    .reduce((p, n) => {
      const c = map.get(n)!
      return p.concat(c)
    }, [] as number[])

  return result.concat(l)
}
// @lc code=end
