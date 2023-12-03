/*
 * @lc app=leetcode.cn id=2530 lang=typescript
 * @lcpr version=30102
 *
 * [2530] 执行 K 次操作后的最大分数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function maxKelements(nums: number[], k: number): number {
  let count = 0
  while (k > 0) {
    const list = nums.sort((a, b) => b - a)
    count += list[0]
    list[0] = Math.ceil(list[0] / 3)
    k--
  }
  return count
}
// @lc code=end

/*
// @lcpr case=start
// [10,10,10,10,10]\n5\n
// @lcpr case=end

// @lcpr case=start
// [1,10,3,3,3]\n3\n
// @lcpr case=end

 */
