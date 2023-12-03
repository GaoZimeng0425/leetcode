/*
 * @lc app=leetcode.cn id=2558 lang=typescript
 * @lcpr version=21917
 *
 * [2558] 从数量最多的堆取走礼物
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function pickGifts(gifts: number[], k: number): number {
  let gift = 0
  while (k > 0) {
    gifts.sort((a, b) => b - a)
    const first = gifts.shift()!
    const a = Math.floor(Math.sqrt(first))
    gift += first - a
    gifts.push(a)
    k--
  }
  return gifts.reduce((a, b) => a + b, 0)
}
// @lc code=end

/*
// @lcpr case=start
// [25,64,9,4,100]\n4\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,1]\n4\n
// @lcpr case=end

 */
