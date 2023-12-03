/*
 * @lc app=leetcode.cn id=38 lang=typescript
 *
 * [38] 外观数列
 */

// @lc code=start
// 111221
// 312211
function countAndSay(n: number): string {
  let result: string = '1'
  for (let i: number = 1; i < n; i++) {
    let temp: string = ''
    let count: number = 1
    for (let j = 0; j < result.length; j++) {
      const element = result[j]
      const next = result[j + 1]
      if (element === next) {
        count++
      } else {
        temp += `${count}${element}`
        count = 1
      }
    }
    result = temp
  }
  return result
};
// @lc code=end

