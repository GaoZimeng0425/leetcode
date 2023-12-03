/*
 * @lc app=leetcode.cn id=1502 lang=typescript
 *
 * [1502] 判断能否形成等差数列
 */

// @lc code=start
function canMakeArithmeticProgression(arr: number[]): boolean {
  arr = arr.sort((a, b) => a - b)
  for (let i = 1; i < arr.length - 1; i++) {
    const prev = arr[i - 1]
    const cur = arr[i];
    const next = arr[i + 1]
    if ((cur * 2) !== (next + prev)) {
      return false
    }
  }
  return true
};
// @lc code=end

