/*
 * @lc app=leetcode.cn id=2806 lang=typescript
 * @lcpr version=30102
 *
 * [2806] 取整购买后的账户余额
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function accountBalanceAfterPurchase(purchaseAmount: number): number {
  return 100 - Math.round(purchaseAmount / 10) * 10
}
// @lc code=end

/*
// @lcpr case=start
// 9\n
// @lcpr case=end

// @lcpr case=start
// 15\n
// @lcpr case=end

 */
