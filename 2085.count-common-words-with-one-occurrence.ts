/*
 * @lc app=leetcode.cn id=2085 lang=typescript
 * @lcpr version=21913
 *
 * [2085] 统计出现过一次的公共字符串
 */

// @lc code=start
function countWords(words1: string[], words2: string[]): number {
  const map = new Map<string, number>()
  words1.forEach((w) => {
    map.set(w, (map.get(w) || 0) + 1)
  })

  const map2 = new Map<string, number>()
  let result = 0
  words2.forEach((w) => {
    map2.set(w, (map2.get(w) || 0) + 1)
  })
  map2.forEach((v, k) => {
    if (map.has(k) && map.get(k) === 1 && map2.get(k) === 1) result++
  })
  return result
}
// @lc code=end

/*
// @lcpr case=start
// ["leetcode","is","amazing","as","is"]\n["amazing","leetcode","is"]\n
// @lcpr case=end

// @lcpr case=start
// ["b","bb","bbb"]\n["a","aa","aaa"]\n
// @lcpr case=end

// @lcpr case=start
// ["a","ab"]\n["a","a","a","ab"]\n
// @lcpr case=end

 */
