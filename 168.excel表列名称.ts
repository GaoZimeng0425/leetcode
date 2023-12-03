/*
 * @lc app=leetcode.cn id=168 lang=typescript
 *
 * [168] Excel表列名称
 */

// @lc code=start
// function convertToTitle(n: number): string {
//   let result: string = ''
//   while (n > 0) {
//     const cur = --n % 26
//     n = Math.floor(n / 26)
//     result = String.fromCharCode(cur + 65) + result
//   }
//   return result
// };

function convertToTitle(n: number): string {
  let result: string = ''
  while (n > 0) {
    let cur = n % 26
    cur = cur === 0 ? 26 : n
    n = Math.floor(n / 26)
  }
  return result
};
// @lc code=end

