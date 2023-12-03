/*
 * @lc app=leetcode.cn id=面试题 08.03 lang=typescript
 * @lcpr version=30102
 *
 * [面试题 08.03] 魔术索引
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findMagicIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === i) return i
  }
  return -1
}
// @lc code=end

/*
// @lcpr case=start
// [0, 2, 3, 4, 5]\n
// @lcpr case=end

// @lcpr case=start
// [1, 1, 1]\n
// @lcpr case=end

 */
