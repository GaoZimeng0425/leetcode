/*
 * @lc app=leetcode.cn id=849 lang=typescript
 * @lcpr version=21913
 *
 * [849] 到最近的人的最大距离
 */

// @lc code=start
function maxDistToClosest(seats: number[]): number {
  const max: Record<number, number> = {}
  let i = 0
  while (i < seats.length) {
    if (seats[i] === 1) {
      i++
    } else {
      let index = i
      max[index] = 1
      i++
      while (i < seats.length && seats[i] === 0) {
        i++
        max[index]++
      }
    }
  }
  let m = 0
  let result = -1
  console.log(max, '<<<<)')
  for (const key in max) {
    const value = max[key]
    if (value > m) {
      m = value
      result = Math.floor(Number(key) + value / 2)
    }
  }
  console.log('🚀 : result:', result)
  return result
}
// @lc code=end

maxDistToClosest([1, 0, 0, 0, 1, 0, 1])
maxDistToClosest([1, 0, 0, 0, 1, 0, 1])
/*
// @lcpr case=start
// [1,0,0,0,1,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,0,0]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

 */
