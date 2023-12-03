/*
 * @lc app=leetcode.cn id=1725 lang=typescript
 * @lcpr version=21917
 *
 * [1725] 可以形成最大正方形的矩形数目
 */

// @lc code=start
function countGoodRectangles(rectangles: number[][]): number {
  const list = rectangles.map(([w, h]) => Math.min(w, h)).sort((a, b) => b - a)
  let count = 1
  for (let index = 1; index < list.length; index++) {
    if (list[index] === list[index - 1]) {
      count++
    } else {
      break
    }
  }
  return count
};
// @lc code=end



/*
// @lcpr case=start
// [[5,8],[3,9],[5,12],[16,5]]\n
// @lcpr case=end

// @lcpr case=start
// [[2,3],[3,7],[4,3],[3,7]]\n
// @lcpr case=end

 */

