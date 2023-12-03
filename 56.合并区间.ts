/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  // let min: number
  // let max: number
  let result = []
  let min: number
  let max: number
  for (let i = 0; i < intervals.length - 1; i++) {
    const current = intervals[i]
    const next = intervals[i + 1]
    if (current[0] > next[1]) {
      result.push(current)
      continue
    }
    if (current[0] > next[0] && next[1] > current[1]) {

    }
  }
};
// @lc code=end

