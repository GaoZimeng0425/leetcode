/*
 * @lc app=leetcode.cn id=309 lang=typescript
 * @lcpr version=21917
 *
 * [309] 买卖股票的最佳时机含冷冻期
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  if (prices.length <= 1) return 0
  const list: [number,number,number][] = []
  for (let index = 1; index < prices.length; index++) {

  }
  return Math.max(list.at(-1)![2], list.at(-1)![1])
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,0,2]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

