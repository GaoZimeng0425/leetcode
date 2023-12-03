/*
 * @lc app=leetcode.cn id=1817 lang=typescript
 *
 * [1716] 计算力扣银行的钱
 */

// @lc code=start
const calc = (start: number, day = 7) => ((start * 2 + day - 1) * day) / 2

function totalMoney(n: number): number {
  const week = Math.floor(n / 7)
  const day = n % 7

  let result: number = 0
  for (let i = 0; i < week; i++) {
    result += calc(i + 1)
  }
  return result + calc(week + 1, day)
}

// @lc code=end
