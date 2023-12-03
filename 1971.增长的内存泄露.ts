/*
 * @lc app=leetcode.cn id=2121 lang=typescript
 *
 * [1971] 寻找图中是否存在路径
 */

// @lc code=start
const findPath = (map: Map<number, number[]>, n: number, source: number) => {
  if (!map.has(n)) return false
  const paths = map.get(n)
  if (paths?.includes(n)) return true
  return paths?.some((path) => findPath(map, path, source))
}
function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  const map: Map<number, number[]> = new Map()
  edges.forEach(([s, e]) => {
    if (map.has(s)) {
      const list = map.get(s)!
      map.set(s, [...list, e])
    } else {
      map.set(s, [e])
    }
  })
  return findPath(map, n, source)
}
// @lc code=end
