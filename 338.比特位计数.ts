/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * [338] 比特位计数
 */

// @lc code=start
function countBits(n: number): number[] {
  const result: number[] = []
  for (let i = 0; i <= n; i++) {
    const s = i.toString(2).match(/1/g)?.length ?? 0
    result.push(s)
  }
  return result
}
// @lc code=end
