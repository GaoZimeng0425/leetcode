/*
 * @lc app=leetcode.cn id=2144 lang=typescript
 * @lcpr version=21913
 *
 * [2144] 打折购买糖果的最小开销
 */

// @lc code=start
// function minimumCost(cost: number[]): number {
//   cost.sort((a, b) => a - b)
//   let count = 0
//   for (let i = cost.length - 1; i >= 2; i -= 3) {
//     const [current, next, gift] = [cost[i], cost[i - 1], cost[i - 2]]
//     count += current + next
//   }
//   const remain = cost.slice(0, cost.length % 3).reduce((a, b) => a + b, 0)
//   return count + remain
// }

function minimumCost(cost: number[]): number {
  return cost.sort((a, b) => b - a).reduce((a, b, i) => ((i + 1) % 3 === 0 ? a : a + b), 0)
}
// @lc code=end

/*
// @lcpr case=start
// [3,3,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [6,5,7,9,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [5,5]\n
// @lcpr case=end

 */
