/*
 * @lc app=leetcode.cn id=2529 lang=typescript
 * @lcpr version=21913
 *
 * [2529] 正整数和负整数的最大计数
 */

// @lc code=start
function maximumCount(nums: number[]): number {
  let [pos, neg] = [0, 0]
  for (const iterator of nums) {
    if (iterator > 0) pos++
    if (iterator < 0) neg++
  }
  return Math.max(pos, neg)
}
// @lc code=end

/*
// @lcpr case=start
// [-2,-1,-1,1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [-3,-2,-1,0,0,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [5,20,66,1314]\n
// @lcpr case=end

 */
