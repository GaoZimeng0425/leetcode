/*
 * @Author: gaozimeng
 * @Date: 2020-08-22 11:39:41
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-14 22:38:54
 * @Description: Do not edit
 * @FilePath: /vuessr/Users/gaozimeng/.leetcode/12.整数转罗马数字.ts
 */
/*
 * @lc app=leetcode.cn id=12 lang=typescript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
// enum numbers {
//   I=1,
//   V=5,
//   X=10,
//   L=50,
//   C=100,
//   D=500,
//   M=1000
// }
function intToRoman(num: number): string {
  const valueSymbols: [number, string][] = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
  const roman = [];
  for (const [value, symbol] of valueSymbols) {
    while (num >= value) {
      num -= value;
      roman.push(symbol);
    }
    if (num == 0) {
      break;
    }
  }
  return roman.join('');
};
// @lc code=end

