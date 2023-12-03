/*
 * @lc app=leetcode.cn id=剑指 Offer 61 lang=typescript
 * @lcpr version=30102
 *
 * [剑指 Offer 61] 扑克牌中的顺子
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function checkDynasty(places: number[]): boolean {
  const set = new Set<number>()
  let [max, min] = [0, 14]
  for (const n of places) {
    if (n === 0) continue
    if (set.has(n)) {
      return false
    } else {
      set.add(n)
    }
    min = Math.min(min, n)
    max = Math.max(max, n)
  }
  return max - min < 5
}
// @lc code=end

/*
// @lcpr case=start
// [0, 6, 9, 0, 7]\n
// @lcpr case=end

// @lcpr case=start
// [7, 8, 9, 10, 11]\n
// @lcpr case=end

 */
