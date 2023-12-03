/*
 * @lc app=leetcode.cn id=2511 lang=typescript
 * @lcpr version=21913
 *
 * [2511] 最多可以摧毁的敌人城堡数目
 */

// @lc code=start
function captureForts(forts: number[]): number {
  let max = 0
  let [ans, pre] = [-1, 0]
  for (let i = 0; i < forts.length; i++) {
    const current = forts[i]
    console.log(pre, current)
    if (current === 1 || current === -1) {
      if (ans !== -1 && pre !== current) {
        max = Math.max(max, i - ans - 1)
      }
      pre = current
      ans = i
    }
  }
  return max
}
// @lc code=end

/*
// @lcpr case=start
// [0,-1,-1,0,-1]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,0,-1,0,0,-1,0,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,-1]\n
// @lcpr case=end

 */
