/*
 * @lc app=leetcode.cn id=492 lang=typescript
 * @lcpr version=21913
 *
 * [492] 构造矩形
 */

// @lc code=start
function constructRectangle(area: number): number[] {
  let maxW = Math.floor(Math.sqrt(area))
  while (area % maxW !== 0) {
    maxW--
  }
  return [area / maxW, maxW]
}
// @lc code=end

/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 37\n
// @lcpr case=end

// @lcpr case=start
// 122122\n
// @lcpr case=end

 */
