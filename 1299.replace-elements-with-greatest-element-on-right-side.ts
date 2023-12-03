/*
 * @lc app=leetcode.cn id=1299 lang=typescript
 * @lcpr version=21913
 *
 * [1299] 将每个元素替换为右侧最大元素
 */

// @lc code=start
function replaceElements(arr: number[]): number[] {
  let max = -1
  const result = []
  for (let i = arr.length - 1; i >= 0; i--) {
    const cur = arr[i]
    result.unshift(max)
    max = Math.max(max, cur)
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// [17,18,5,4,6,1]\n
// @lcpr case=end

// @lcpr case=start
// [400]\n
// @lcpr case=end

 */
