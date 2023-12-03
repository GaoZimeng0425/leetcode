/*
 * @lc app=leetcode.cn id=2582 lang=typescript
 * @lcpr version=21913
 *
 * [2582] 递枕头
 */

// @lc code=start
function passThePillow(n: number, time: number): number {
  const count = time % (n - 1)
  return Math.floor(time / (n - 1)) % 2 === 0 ? count + 1 : n - count
}
// @lc code=end

/*
// @lcpr case=start
// 4\n5\n
// @lcpr case=end

// @lcpr case=start
// 3\n2\n
// @lcpr case=end

 */
