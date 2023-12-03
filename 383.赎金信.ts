/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  const hashMap: Map<string, number> = new Map()
  for (let i = 0; i < magazine.length; i++) {
    const str = magazine[i]
    hashMap.set(str, (hashMap.get(str) || 0) + 1)
  }
    console.log(`[G]: functioncanConstruct -> hashMap`, hashMap)
  for (let i = 0; i < ransomNote.length; i++) {
    const str = ransomNote[i]
    if (!hashMap.has(str)) return false
    let count: number = hashMap.get(str) as number
    if (--count === 0) {
      hashMap.delete(str)
    } else {
      hashMap.set(str, count)
    }
  }
  return true
};
// @lc code=end

