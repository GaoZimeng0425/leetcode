/*
 * @lc app=leetcode.cn id=1436 lang=typescript
 * @lcpr version=21917
 *
 * [1436] 旅行终点站
 */

// @lc code=start
function destCity(paths: string[][]): string {
  const [inStack, outStack]: [Set<string>, Set<string>] = [new Set(), new Set()]
  for (const [start, end] of paths) {
    if (outStack.has(start)) {
      outStack.delete(start)
    } else {
      inStack.add(start)
    }
    if (inStack.has(end)) {
      inStack.delete(end)
    } else {
      outStack.add(end)
    }
  }
  return [...outStack][0]
  // return outStack.values().next().value
}
// @lc code=end

/*
// @lcpr case=start
// [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]\n
// @lcpr case=end

// @lcpr case=start
// [["B","C"],["D","B"],["C","A"]]\n
// @lcpr case=end

// @lcpr case=start
// [["A","Z"]]\n
// @lcpr case=end

 */
