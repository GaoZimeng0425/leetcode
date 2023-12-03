/*
 * @lc app=leetcode.cn id=1184 lang=typescript
 * @lcpr version=21917
 *
 * [1184] 公交站间的距离
 */

// @lc code=start
function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
  const len = distance.length
  const startDistance = Math.min(start, len - start)
  const endDistance = Math.min(destination, len - destination)
  return Math.min(
    startDistance +
      distance[start] +
      distance[start + 1] +
      distance[start + 2] +
      distance[start + 3],
    endDistance +
      distance[destination - 1] +
      distance[destination] +
      distance[destination + 1] +
      distance[destination + 2]
  )
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4]\n0\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4]\n0\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4]\n0\n3\n
// @lcpr case=end

 */
