/*
 * @lc app=leetcode.cn id=2103 lang=typescript
 * @lcpr version=21913
 *
 * [2103] 环和杆
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function countPoints(rings: string): number {
  const map = new Map<string, Set<string>>()
  for (let i = 0; i < rings.length; i += 2) {
    const [color, index] = [rings[i], rings[i + 1]]
    map.set(index, (map.get(index) ?? new Set())?.add(color))
  }
  return Array.from(map).reduce((acc, [_, set]) => (acc += set.size === 3 ? 1 : 0), 0)
}
// @lc code=end

/*
// @lcpr case=start
// "B0B6G0R6R0R6G9"\n
// @lcpr case=end

// @lcpr case=start
// "B0R0G0R9R0B0G0"\n
// @lcpr case=end

// @lcpr case=start
// "G4"\n
// @lcpr case=end

 */
