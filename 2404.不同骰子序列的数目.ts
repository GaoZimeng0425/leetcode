/*
 * @lc app=leetcode.cn id=2404 lang=typescript
 *
 * [2404] 出现最频繁的偶数元素
 */

// @lc code=start
function mostFrequentEven(nums: number[]): number {
  const map: Map<number, number> = new Map()
  let max = [-1, 0]
  nums.forEach((num) => {
    if (num % 2 === 1) return
    map.set(num, (map.get(num) || 0) + 1)
  })
  for (const [n, count] of map) {
    if (max[1] > count) continue
    if (max[1] === count && n > max[0]) continue
    max = [n, count]
  }
  return max[0]
}
// @lc code=end
