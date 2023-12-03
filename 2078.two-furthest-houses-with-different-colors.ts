/*
 * @lc app=leetcode.cn id=2078 lang=typescript
 * @lcpr version=21913
 *
 * [2078] 两栋颜色不同且距离最远的房子
 */

// @lc code=start
function maxDistance(colors: number[]): number {
  let max = 0
  for (let i = 0; i < colors.length; i++) {
    const current = colors[i]
    for (let j = i + 1; j < colors.length; j++) {
      const next = colors[j]
      if (current !== next) max = Math.max(max, j - i)
    }
  }
  return max
}
// @lc code=end

/*
// @lcpr case=start
// [9,9,9,18,9,9,9,9,9,18]\n
// @lcpr case=end
// @lcpr case=start
// [1,1,1,6,1,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,8,3,8,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

 */
