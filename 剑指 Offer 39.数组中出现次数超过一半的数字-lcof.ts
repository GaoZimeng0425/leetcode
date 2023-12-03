/*
 * @lc app=leetcode.cn id=剑指 Offer 39 lang=typescript
 * @lcpr version=30102
 *
 * [剑指 Offer 39] 数组中出现次数超过一半的数字
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function inventoryManagement(stock: number[]): number {
  let vote = 1
  let prev = stock[0]
  for (let i = 1; i < stock.length; i++) {
    const current = stock[i]
    if (vote === 0) prev = current
    vote += prev === current ? 1 : -1
  }
  return prev
}
// @lc code=end

/*
// @lcpr case=start
// [6, 1, 3, 1, 1, 1]\n
// @lcpr case=end

 */
