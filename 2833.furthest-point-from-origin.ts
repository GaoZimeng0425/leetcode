/*
 * @lc app=leetcode.cn id=2833 lang=typescript
 * @lcpr version=30102
 *
 * [2833] 距离原点最远的点
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function furthestDistanceFromOrigin(moves: string): number {
  let [lv, rv] = [0, 0]
  for (const char of moves) {
    if (char === 'L') lv++
    if (char === 'R') rv++
  }
  return moves.length - Math.min(lv, rv) * 2
}
// @lc code=end

/*
// @lcpr case=start
// "L_RL__R"\n
// @lcpr case=end

// @lcpr case=start
// "_R__LL_"\n
// @lcpr case=end

// @lcpr case=start
// "_______"\n
// @lcpr case=end

 */
