/*
 * @lc app=leetcode.cn id=2591 lang=typescript
 * @lcpr version=21914
 *
 * [2591] 将钱分给最多的儿童
 */

// @lc code=start
function distMoney(money: number, children: number): number {
  if (children > money) return -1
  if (money > 8 * children) return children - 1
  if (money === 8 * children - 4) return children - 2
  return Math.floor((money - children) / 7)
}

// @lc code=end

/*
// @lcpr case=start
// 8\n2\n
// @lcpr case=end
// @lcpr case=start
// 28\n8\n
// @lcpr case=end
// @lcpr case=start
// 20\n3\n
// @lcpr case=end

// @lcpr case=start
// 183\n18\n
// @lcpr case=end

 */
