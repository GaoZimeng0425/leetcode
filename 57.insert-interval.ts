/*
 * @lc app=leetcode.cn id=57 lang=typescript
 * @lcpr version=21913
 *
 * [57] 插入区间
 */

// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
  intervals.push(newInterval)
  intervals.sort((a, b) => a[0] - b[0])
  const result: number[][] = [intervals[0]]
  for (let index = 1; index < intervals.length; index++) {
    const current = intervals[index]
    const last = result.at(-1)!
    if (last[1] >= current[0]) {
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
// [[1,3],[6,9]]\n[2,5]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[3,5],[6,7],[8,10],[12,16]]\n[4,8]\n
// @lcpr case=end

// @lcpr case=start
// []\n[5,7]\n
// @lcpr case=end

// @lcpr case=start
// [[1,5]]\n[2,3]\n
// @lcpr case=end

// @lcpr case=start
// [[1,5]]\n[2,7]\n
// @lcpr case=end

 */
