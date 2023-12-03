/*
 * @lc app=leetcode.cn id=274 lang=typescript
 *
 * [274] H 指数
 */

// @lc code=start
function hIndex(citations: number[]): number {
  citations.sort((a, b) => a - b)
  let h = 0, i = citations.length - 1;
  while (i >= 0 && citations[i] > h) {
    h++
    i--
  }
  return h
};
// @lc code=end

