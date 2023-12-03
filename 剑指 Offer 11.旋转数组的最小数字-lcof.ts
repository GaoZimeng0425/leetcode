/*
 * @lc app=leetcode.cn id=剑指 Offer 11 lang=typescript
 * @lcpr version=30102
 *
 * [剑指 Offer 11] 旋转数组的最小数字
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function stockManagement(stock: number[]): number {
  const first = stock[0]
  for (let i = stock.length - 2; i >= 0; i--) {
    const [pre, cur] = [stock[i], stock[i + 1]]
    if (cur > first) return first
    if (pre > cur) {
      return cur
    }
  }
  return first
}
// @lc code=end

/*
// @lcpr case=start
// [4,5,8,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [5,7,9,1,2]\n
// @lcpr case=end

 */
