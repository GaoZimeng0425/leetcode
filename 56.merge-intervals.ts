/*
 * @lc app=leetcode.cn id=56 lang=typescript
 * @lcpr version=21913
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])
  const result: number[][] = [intervals[0]]
  for (let index = 1; index < intervals.length; index++) {
    const current = intervals[index]
    const last = result.at(-1)!
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1])
    } else {
      result.push(current)
    }
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// [[1,3],[2,6],[8,10],[15,18]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,4],[4,5]]\n
// @lcpr case=end

 */
