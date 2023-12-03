/*
 * @lc app=leetcode.cn id=2057 lang=typescript
 * @lcpr version=21913
 *
 * [2057] 值相等的最小索引
 */

// @lc code=start
function smallestEqual(nums: number[]): number {
  return nums.findIndex((num, i) => i % 10 === num)
}
// @lc code=end

/*
// @lcpr case=start
// [0,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [4,3,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5,6,7,8,9,0]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,3,5,2]\n
// @lcpr case=end

 */
