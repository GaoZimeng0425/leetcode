/*
 * @lc app=leetcode.cn id=2848 lang=typescript
 * @lcpr version=30102
 *
 * [2848] 与车相交的点
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function numberOfPoints(nums: number[][]): number {
  const set = new Set<number>()
  for (const [start, end] of nums) {
    for (let i = start; i <= end; i++) {
      set.add(i)
    }
  }
  return set.size
}
// @lc code=end

/*
// @lcpr case=start
// [[3,6],[1,5],[4,7]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,3],[5,8]]\n
// @lcpr case=end

 */
