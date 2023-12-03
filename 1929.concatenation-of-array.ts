/*
 * @lc app=leetcode.cn id=1929 lang=typescript
 * @lcpr version=21913
 *
 * [1929] 数组串联
 */

// @lc code=start
function getConcatenation(nums: number[]): number[] {
  return [...nums, ...nums]
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,3,2,1]\n
// @lcpr case=end

 */
