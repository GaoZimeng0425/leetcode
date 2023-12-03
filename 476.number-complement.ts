/*
 * @lc app=leetcode.cn id=476 lang=typescript
 * @lcpr version=21913
 *
 * [476] 数字的补数
 */

// @lc code=start
function findComplement(num: number): number {
  let c = []
  while (num) {
    c.push(num % 2 ^ 1)
    num >>= 1
  }
  return c.reduceRight((result, item, i) => {
    return result + Math.pow(2, i) * item
  }, 0)
}
// @lc code=end

/*
// @lcpr case=start
// 5\n
// @lcpr case=end

// @lcpr case=start
// 10\n
// @lcpr case=end

 */
