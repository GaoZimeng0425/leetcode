/*
 * @lc app=leetcode.cn id=1460 lang=typescript
 *
 * [1460] 通过翻转子数组使两个数组相等
 */

// @lc code=start
function canBeEqual(target: number[], arr: number[]): boolean {
  let map = new Map()
  target.forEach(t => {
    map.set(t, (map.get(t) || 0) + 1)
  })
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (map.has(current)) {
      if (map.get(current) === 1) {
        map.delete(current)
      } else {
        map.set(current, map.get(current) - 1)
      }
    } else {
      return false
    }
  }
  return map.size === 0
};
// @lc code=end

