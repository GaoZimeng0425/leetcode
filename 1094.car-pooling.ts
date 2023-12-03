/*
 * @lc app=leetcode.cn id=1094 lang=typescript
 * @lcpr version=30111
 *
 * [1094] 拼车
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function carPooling(trips: number[][], capacity: number): boolean {
  const list: number[] = []
  for (const [count, start, end] of trips) {
    for (let i = start; i <= end; i++) {
      list[i] += count
    }
  }
  return list.every((count) => count <= capacity)
}
// @lc code=end

/*
// @lcpr case=start
// [[2,1,5],[3,3,7]]\n4\n
// @lcpr case=end

// @lcpr case=start
// [[2,1,5],[3,3,7]]\n5\n
// @lcpr case=end

 */
