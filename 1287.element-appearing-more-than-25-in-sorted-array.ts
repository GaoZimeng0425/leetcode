/*
 * @lc app=leetcode.cn id=1287 lang=typescript
 * @lcpr version=21913
 *
 * [1287] 有序数组中出现次数超过25%的元素
 */

// @lc code=start
function findSpecialInteger(arr: number[]): number {
  const map = new Map()
  const max = arr.length / 4
  return arr.find((item) => {
    map.set(item, (map.get(item) || 0) + 1)
    if (map.get(item) > max) return true
  })!
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,2,6,6,6,6,7,10]\n
// @lcpr case=end

 */
