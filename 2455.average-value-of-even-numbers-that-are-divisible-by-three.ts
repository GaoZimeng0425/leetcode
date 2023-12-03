/*
 * @lc app=leetcode.cn id=2455 lang=typescript
 * @lcpr version=21913
 *
 * [2455] 可被三整除的偶数的平均值
 */

// @lc code=start
function averageValue(nums: number[]): number {
  const list = nums.filter((num) => num % 6 === 0)
  if (list.length === 0) return 0
  return Math.floor(list.reduce((p, c) => p + c) / list.length)
}
// @lc code=end

/*
// @lcpr case=start
// [94,65,82,40,79,74,92,84,37,19,16,85,20,79,25,89,55,67,84,3,79,38,16,44,2,54,58,94,69,71,14,24,13,21]\n
// @lcpr case=end
// @lcpr case=start
// [1,3,6,10,12,15]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,4,7,10]\n
// @lcpr case=end

 */
