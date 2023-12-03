/*
 * @lc app=leetcode.cn id=面试题 17.04 lang=typescript
 * @lcpr version=30102
 *
 * [面试题 17.04] 消失的数字
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function missingNumber(nums: number[]): number {
  const set = new Set(nums)
  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) return i
  }
  return -1
}
// @lc code=end

/*
// @lcpr case=start
// [0]\n
// @lcpr case=end
// @lcpr case=start
// [3,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [9,6,4,2,3,5,7,0,1]\n
// @lcpr case=end

 */
