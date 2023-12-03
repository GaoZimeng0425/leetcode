/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
enum A {
  A=1,
  B=1,
  C=1
}
const s = (n: number): number[] => {
  const result: number[] = []
  while (n > 0) {
    result.push(n % 10)
    n = ~~(n / 10)
  }
  return result
}
// function isHappy(n: number): boolean {
//   const num: number[] = s(n)
//   let f = 1
//   while ()
// };
// @lc code=end

