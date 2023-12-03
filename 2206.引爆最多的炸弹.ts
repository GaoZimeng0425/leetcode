/*
 * @lc app=leetcode.cn id=2308 lang=typescript
 *
 * [2206] 将数组划分成相等数对
 */

// @lc code=start
function divideArray(nums: number[]): boolean {
  const set: Set<number> = new Set()
  let length = nums.length / 2
  nums.forEach((n) => {
    if (set.has(n)) {
      length--
      set.delete(n)
    } else {
      set.add(n)
    }
  })
  return length === 0
}
// @lc code=end
