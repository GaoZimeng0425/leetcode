/*
 * @lc app=leetcode.cn id=1394 lang=typescript
 * @lcpr version=21917
 *
 * [1394] 找出数组中的幸运数
 */

// @lc code=start
function findLucky(arr: number[]): number {
  const map = new Map<number, number>()
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i]
    map.set(cur, (map.get(cur) || 0) + 1)
  }
  let max = -1
  for (const [num, count] of map) {
    if (num === count) {
      max = Math.max(max, num)
    }
  }
  return max
}
// @lc code=end

/*
// @lcpr case=start
// [2,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,3,3,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,2,3,3]\n
// @lcpr case=end

// @lcpr case=start
// [5]\n
// @lcpr case=end

// @lcpr case=start
// [7,7,7,7,7,7,7]\n
// @lcpr case=end

 */
