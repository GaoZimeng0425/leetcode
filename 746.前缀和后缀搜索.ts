/*
 * @lc app=leetcode.cn id=747 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
  const dp: number[] = Array.from({ length: cost.length + 1 })
  dp[0] = dp[1] = 0
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }
  return dp[cost.length]
}

// @lc code=end
