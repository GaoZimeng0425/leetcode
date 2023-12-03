/*
 * @Author: gaozimeng
 * @Date: 2020-08-17 11:52:56
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-08-30 16:03:27
 * @Description: Do not edit
 * @FilePath: /imooc-jira-master/Users/gaozimeng/.leetcode/242.有效的字母异位词.ts
 */
/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  // const hashMap: Map<string, number> = new Map()
  // for (const str of s) {
  //   hashMap.set(str, (hashMap.get(str) || 0) + 1)
  // }
  // for (let i = 0; i < t.length; i++) {
  //   const str = t[i]
  //   if (!hashMap.has(str)) return false
  //   let num: number = hashMap.get(str)!
  //   if (num === 1) {
  //     hashMap.delete(str)
  //   } else {
  //     hashMap.set(str, num - 1)
  //   }
  // }
  // return hashMap.size === 0
  if (s.length !== t.length) return false
  const map: Map<string, number> = new Map()
  for (let i = 0; i < s.length; i++) {
    const [a, b] = [s[i], t[i]]
    map.set(a, (map.get(a) ?? 0) + 1)
    map.set(b, (map.get(b) ?? 0) - 1)
  }
  return Array.from(map.values()).every(num => num === 0)
}

// @lc code=end
