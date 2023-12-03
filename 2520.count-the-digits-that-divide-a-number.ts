/*
 * @lc app=leetcode.cn id=2520 lang=typescript
 * @lcpr version=21913
 *
 * [2520] 统计能整除数字的位数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function countDigits(num: number): number {
  return `${num}`
    .split('')
    .map((item) => parseInt(item))
    .reduce((result, item) => (result += num % item === 0 ? 1 : 0), 0)
}
// @lc code=end

/*
// @lcpr case=start
// 7\n
// @lcpr case=end

// @lcpr case=start
// 121\n
// @lcpr case=end

// @lcpr case=start
// 1248\n
// @lcpr case=end

 */
