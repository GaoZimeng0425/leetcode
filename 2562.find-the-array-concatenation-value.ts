/*
 * @lc app=leetcode.cn id=2562 lang=typescript
 * @lcpr version=21917
 *
 * [2562] 找出数组的串联值
 */

// @lc code=start
function findTheArrayConcVal(nums: number[]): number {
  const list: number[] = []
  while (nums.length) {
    list.push(parseInt(`${nums.shift() ?? ''}${nums.pop() ?? ''}`))
  }
  return list.reduce((r, item) => r + item)
}
// @lc code=end

/*
// @lcpr case=start
// [7,52,2,4]\n
// @lcpr case=end

// @lcpr case=start
// [5,14,13,8,12]\n
// @lcpr case=end

 */
