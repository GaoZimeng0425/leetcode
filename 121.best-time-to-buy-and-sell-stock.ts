/*
 * @lc app=leetcode.cn id=121 lang=typescript
 * @lcpr version=21917
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let max = 0
  let min = prices[0]
  for (let i = 0; i < prices.length; i++) {
    max = Math.max(max, prices[i] - min)
    min = Math.min(min, prices[i])
  }
  return max
}
// @lc code=end

/*
// @lcpr case=start
// [1,2]\n
// @lcpr case=end
// @lcpr case=start
// [7,1,5,3,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,4,3,1]\n
// @lcpr case=end

 */
