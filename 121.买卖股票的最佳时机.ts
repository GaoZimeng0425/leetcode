/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let max = 0
  let min = prices[0]
  for (let i = 1; i < prices.length; i++) {
    let cur = prices[i]
    if (cur > min) {
      max = Math.max(cur - min, max)
    } else {
      min = cur
    }
  }
  return max
};
// @lc code=end

