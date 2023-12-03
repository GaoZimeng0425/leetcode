/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
function firstUniqChar(s: string): number {
  const hashMap: Map<string, number | boolean> = new Map()
  let {length} = s
  for (let i: number = 0; i < length; i++) {
    const key = s[i]
    if (hashMap.has(key)) {
      hashMap.set(key, false)
    } else {
      hashMap.set(key, i)
    }
  }
  for (const item of hashMap) {
    let [, value] = item
    if (value !== false) return (value as number)
  }
  return -1
}
// @lc code=end

