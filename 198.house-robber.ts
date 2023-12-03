/*
 * @lc app=leetcode.cn id=198 lang=typescript
 * @lcpr version=21913
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])
  let [x, y] = [0, 0]
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    ;[x, y] = [y + cur, Math.max(x, y)]
  }
  return Math.max(x, y)
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,7,9,3,1]\n
// @lcpr case=end

 */
