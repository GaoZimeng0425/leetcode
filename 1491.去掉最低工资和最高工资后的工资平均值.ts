/*
 * @lc app=leetcode.cn id=1491 lang=typescript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
function average(salary: number[]): number {
  let max = salary[0]
  let min = salary[0]
  let result = 0
  for (const item of salary) {
    max = Math.max(max, item)
    min = Math.min(min, item)
    result += item
  }
  return (result - min - max) / (salary.length - 2)
};
// @lc code=end

