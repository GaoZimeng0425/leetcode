/*
 * @lc app=leetcode.cn id=2481 lang=typescript
 * @lcpr version=21909
 *
 * [2481] 分割圆的最少切割次数
 */

// @lc code=start
const numberOfCuts = (n: number): number => (n == 1 ? 0 : n % 2 == 0 ? n / 2 : n)
// @lc code=end

/*
// @lcpr case=start
// 9\n
// @lcpr case=end

// @lcpr case=start
// 22\n
// @lcpr case=end

 */
