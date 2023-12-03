/*
 * @lc app=leetcode.cn id=1342 lang=typescript
 * @lcpr version=21917
 *
 * [1342] 将数字变成 0 的操作次数
 */

// @lc code=start
function numberOfSteps(num: number): number {
  let count = 0
  while (num > 0) {
    count++
    num % 2 === 0 ? (num /= 2) : (num -= 1)
  }
  return count
}
// @lc code=end

/*
// @lcpr case=start
// 14\n
// @lcpr case=end

// @lcpr case=start
// 8\n
// @lcpr case=end

// @lcpr case=start
// 123\n
// @lcpr case=end

 */
