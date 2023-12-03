/*
 * @lc app=leetcode.cn id=2739 lang=typescript
 * @lcpr version=30102
 *
 * [2739] 总行驶距离
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function distanceTraveled(mainTank: number, additionalTank: number): number {
  let result = 0
  while (mainTank >= 5) {
    const current = Math.floor(mainTank / 5)
    const add = current > additionalTank ? additionalTank : Math.floor(mainTank / 5)
    result += current * 50
    additionalTank -= add
    mainTank = add + (mainTank % 5)
  }
  return result + mainTank * 10
}
// @lc code=end

/*
// @lcpr case=start
// 6\n1\n
// @lcpr case=end
// @lcpr case=start
// 5\n10\n
// @lcpr case=end

// @lcpr case=start
// 1\n2\n
// @lcpr case=end

 */
