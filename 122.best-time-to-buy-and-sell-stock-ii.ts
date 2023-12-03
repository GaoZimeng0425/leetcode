/*
 * @lc app=leetcode.cn id=122 lang=typescript
 * @lcpr version=21917
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let [min, max, count] = [prices[0], prices[0], 0]
  let i = 1
  while (i < prices.length) {
    while (prices[i] > max) {
      max = prices[i]
      i++
    }
    count += max - min
    max = min = prices[i++]
  }
  return count
}
// @lc code=end

/*
// @lcpr case=start
// [7,1,5,3,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,4,3,1]\n
// @lcpr case=end

 */
