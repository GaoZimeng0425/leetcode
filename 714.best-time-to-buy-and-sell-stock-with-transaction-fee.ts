/*
 * @lc app=leetcode.cn id=714 lang=typescript
 * @lcpr version=21917
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
function maxProfit(prices: number[], fee: number): number {
  let max = 0
  let pre = prices[0]
  for (let i = 1; i < prices.length; i++) {
    const cur = prices[i] - pre - fee
    if (cur > 0) {
      max += cur
      pre = prices[i]
    }
    if (pre > prices[i]) {
      pre = prices[i]
    }
  }
  return max
}
// @lc code=end

maxProfit([1, 3, 2, 8, 4, 9], 2)

/*
// @lcpr case=start
// [1, 3, 2, 8, 4, 9]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,3,7,5,10,3]\n3\n
// @lcpr case=end

 */
