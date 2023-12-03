/*
 * @lc app=leetcode.cn id=2293 lang=typescript
 * @lcpr version=21913
 *
 * [2293] 极大极小游戏
 */

// @lc code=start
function minMaxGame(nums: number[]): number {
  if (nums.length === 1) return nums.at(0)!
  const list = Array.from({ length: nums.length / 2 }, (_, i) =>
    Math[i % 2 === 0 ? 'min' : 'max'](nums.at(i * 2)!, nums.at(i * 2 + 1)!)
  )
  return minMaxGame(list)
}
// @lc code=end

/*
// @lcpr case=start
// [1,3,5,2,4,8,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [3]\n
// @lcpr case=end

 */
