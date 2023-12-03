/*
 * @lc app=leetcode.cn id=LCP 50 lang=typescript
 * @lcpr version=21913
 *
 * [LCP 50] 宝石补给
 */

// @lc code=start
function giveGem(gem: number[], operations: number[][]): number {
  for (let i = 0; i < operations.length; i++) {
    const [x, y] = operations[i]
    const n = Math.floor(gem[x] / 2)
    gem[y] += n
    gem[x] -= n
  }
  gem.sort((a, b) => a - b)
  return gem.at(-1)! - gem.at(0)!
}
// @lc code=end

/*
// @lcpr case=start
// [3,1,2]\n[[0,2],[2,1],[2,0]]`>\n
// @lcpr case=end

// @lcpr case=start
// [100,0,50,100]\n[[0,2],[0,1],[3,0],[3,0]]`>\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0,0]\n[[1,2],[3,1],[1,2]]`>\n
// @lcpr case=end

 */
