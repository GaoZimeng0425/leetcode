/*
 * @lc app=leetcode.cn id=2733 lang=typescript
 * @lcpr version=30102
 *
 * [2733] 既不是最小值也不是最大值
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findNonMinOrMax(nums: number[]): number {
  if (nums.length <= 2) return -1
  return nums.sort((a, b) => a - b).at(1)!
}
// @lc code=end

/*
// @lcpr case=start
// [3,2,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

 */
