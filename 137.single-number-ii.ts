/*
 * @lc app=leetcode.cn id=137 lang=typescript
 * @lcpr version=30102
 *
 * [137] 只出现一次的数字 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function singleNumber(nums: number[]): number {
  return ([...new Set(nums)].reduce((a, b) => a + b) * 3 - nums.reduce((a, b) => a + b)) / 2
}
// @lc code=end

/*
// @lcpr case=start
// [2,2,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,0,1,0,1,99]\n
// @lcpr case=end

 */
