/*
 * @lc app=leetcode.cn id=2706 lang=typescript
 * @lcpr version=21917
 *
 * [2706] 购买两块巧克力
 */

// @lc code=start
function buyChoco(prices: number[], money: number): number {
  const [min1, min2] = prices.sort((a, b) => a - b)
  return money >= min1 + min2 ? money - min1 - min2 : money
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [3,2,3]\n3\n
// @lcpr case=end

 */
