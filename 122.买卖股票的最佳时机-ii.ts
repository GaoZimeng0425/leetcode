/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let max = 0
  let min = prices[0]
  for (let i = 1; i < prices.length; i++) {
    const cur = prices[i]
    const diff = cur - min
    if (diff > 0) {
      max += diff
      min = cur
    } else {
      min = cur
    }
  }
  return max
};
// @lc code=end

