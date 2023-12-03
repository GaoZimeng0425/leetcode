/*
 * @lc app=leetcode.cn id=2303 lang=typescript
 * @lcpr version=21914
 *
 * [2303] 计算应缴税款总额
 */

// @lc code=start
function calculateTax(brackets: number[][], income: number): number {
  let sum = 0
  let lower = 0
  for (let i = 0; i < brackets.length; i++) {
    const [upper, _percent] = brackets[i]
    let percent = _percent / 100
    if (income < lower) return sum
    sum += ((income < upper ? income : upper) - lower) * percent
    lower = upper
  }
  return sum
}
// @lc code=end

/*
// @lcpr case=start
// [[3,50],[7,10],[12,25]]\n10\n
// @lcpr case=end

// @lcpr case=start
// [[1,0],[4,25],[5,50]]\n2\n
// @lcpr case=end

// @lcpr case=start
// [[2,50]]\n0\n
// @lcpr case=end

 */
