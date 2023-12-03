/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(N: number): number {
  if (N <= 1) return N
  let prev = 0
  let cur = 1
  while (--N) {
    let next = prev + cur
    prev = cur
    cur = next
  }
  return cur
};
// @lc code=end

