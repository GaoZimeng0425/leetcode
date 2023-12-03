/*
 * @lc app=leetcode.cn id=2778 lang=typescript
 * @lcpr version=30102
 *
 * [2778] 特殊元素平方和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function sumOfSquares(nums: number[]): number {
  return nums.reduce((a, b, i) => (nums.length % (i + 1) === 0 ? a + Math.pow(b, 2) : a), 0)
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,7,1,19,18,3]\n
// @lcpr case=end

 */
