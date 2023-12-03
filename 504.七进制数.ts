/*
 * @lc app=leetcode.cn id=504 lang=typescript
 *
 * [504] 七进制数
 */

// @lc code=start
function convertToBase7(num: number): string {
  const flag = num >= 0
  let add: number = 0
  num = Math.abs(num)
  let result: string = ''
  while (num > 0) {
    result = (num % 7).toString() + result
    add = num % 7 === 0 ? 1 : 0
    num = Math.floor(num / 7)
  }
  if (add) result = '1' + result
  return (flag ? '' : '-') + (result || '0')
};
// @lc code=end

