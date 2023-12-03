/*
 * @lc app=leetcode.cn id=1952 lang=typescript
 * @lcpr version=30104
 *
 * [1952] 三除数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function isThree(n: number): boolean {
  let count = 0
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++
  }
  return count === 3
}
// @lc code=end

/*
// @lcpr case=start
// 12\n
// @lcpr case=end
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 4\n
// @lcpr case=end

 */
