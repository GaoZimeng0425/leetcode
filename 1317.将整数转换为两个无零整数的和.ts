/*
 * @lc app=leetcode.cn id=1317 lang=typescript
 *
 * [1317] 将整数转换为两个无零整数的和
 */

// @lc code=start
function getNoZeroIntegers(n: number): number[] {
  if ((n - 1) % 10 === 0) {
    return [2, n - 2]
  }
  return [1, n - 1]
};
// @lc code=end

