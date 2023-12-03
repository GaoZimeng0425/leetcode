/*
 * @lc app=leetcode.cn id=2269 lang=typescript
 *
 * [2269]  找到一个数字的 K 美丽值
 */

// @lc code=start
function divisorSubstrings(num: number, k: number): number {
  let count = 0
  const str = `${num}`
  for (let i = 0; i < str.length - k; i++) {
    const cur = str.slice(i, k)
    const n = ~~(cur.replace(/^0+/, '') || '0')
    if (n === 0) continue
    num % n === 0 && count++
  }
  return count
}
// @lc code=end
const compare = (pre: string, cur: string) => {
  const map: Map<string, number> = new Map()
  for (const v of pre) {
    map.set(v, (map.get(v) ?? 0) + 1)
  }
  for (const v of cur) {
    if (!map.has(v)) return false
    map.set(v, (map.get(v) ?? 0) - 1)
    if (map.get(v) === 0) map.delete(v)
  }
  return map.size === 0
}

function removeAnagrams(words: string[]): string[] {
  const result: string[] = [words[0]]
  for (let i = 1; i < words.length; i++) {
    const e = compare(words[i - 1], words[i])
    if (!e) result.push(words[i])
  }
  return result
}
