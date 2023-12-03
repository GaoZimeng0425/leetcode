/*
 * @lc app=leetcode.cn id=LCR 068 lang=typescript
 * @lcpr version=30103
 *
 * [LCR 068] 搜索插入位置
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]
    if (current >= target) return i
  }
  return nums.length
}
// @lc code=end

/*
// @lcpr case=start
// [1,3,5,6]\n5\n
// @lcpr case=end

// @lcpr case=start
// [1,3,5,6]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,3,5,6]\n7\n
// @lcpr case=end

// @lcpr case=start
// [1,3,5,6]\n0\n
// @lcpr case=end

// @lcpr case=start
// [1]\n0\n
// @lcpr case=end

 */
