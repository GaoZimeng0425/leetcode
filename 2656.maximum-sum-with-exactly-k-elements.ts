/*
 * @lc app=leetcode.cn id=2656 lang=typescript
 * @lcpr version=21917
 *
 * [2656] K 个元素的最大和
 */

// @lc code=start
function maximizeSum(nums: number[], k: number): number {
  const max = Math.max(...nums)
  return ((max + max + k - 1) * k) / 2
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n3\n
// @lcpr case=end

// @lcpr case=start
// [5,5,5]\n2\n
// @lcpr case=end

 */
