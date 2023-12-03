/*
 * @lc app=leetcode.cn id=1232 lang=typescript
 * @lcpr version=21914
 *
 * [1232] 缀点成线
 */

// @lc code=start
const deviation = ([x1, y1]: number[], [x2, y2]: number[]) => (x1 - x2) / (y1 - y2)
function checkStraightLine(coordinates: number[][]): boolean {
  const r = deviation(coordinates[0], coordinates[1])
  for (let i = 2; i < coordinates.length; i++) {}
  return true
}
// @lc code=end

/*
// @lcpr case=start
// [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]\n
// @lcpr case=end

 */
