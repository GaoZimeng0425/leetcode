/*
 * @lc app=leetcode.cn id=1837 lang=typescript
 * @lcpr version=21913
 *
 * [1837] K 进制表示下的各位数字总和
 */

// @lc code=start
const count = (n: number, k: number): string => {
  const g = n % k
  const a = Math.floor(n / k)
  if (a === 0) return `${g}`
  return count(a, k) + g
}
function sumBase(n: number, k: number): number {
  return count(n, k)
    .split('')
    .map(Number)
    .reduce((a, b) => a + b)
}
// @lc code=end

/*
// @lcpr case=start
// 42\n2\n
// @lcpr case=end
// @lcpr case=start
// 34\n6\n
// @lcpr case=end

// @lcpr case=start
// 10\n10\n
// @lcpr case=end

 */
