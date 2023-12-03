/*
 * @lc app=leetcode.cn id=1323 lang=typescript
 *
 * [1323] 6 和 9 组成的最大数字
 */

// @lc code=start
function maximum69Number (num: number): number {
  let list = []
  while (num) {
    list.unshift(num % 10)
    num = Math.floor(num / 10)
  }
  for (let i = 0; i < list.length; i++) {
    const current = list[i];
    if (current === 6) {
      list[i] = 9
      break
    }
  }
  return parseInt(list.join(''))
};
// @lc code=end

