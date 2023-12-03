/*
 * @lc app=leetcode.cn id=剑指 Offer 40 lang=typescript
 * @lcpr version=30102
 *
 * [剑指 Offer 40] 最小的k个数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function inventoryManagement(stock: number[], cnt: number): number[] {
  return stock.sort((a, b) => a - b).slice(0, cnt)
}
// @lc code=end

/*
// @lcpr case=start
// [2,5,7,4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [0,2,3,6]\n2\n
// @lcpr case=end

 */
