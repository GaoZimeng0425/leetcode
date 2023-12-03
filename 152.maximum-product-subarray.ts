/*
 * @lc app=leetcode.cn id=152 lang=typescript
 * @lcpr version=21917
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
function maxProduct(nums: number[]): number {
  const list: number[] = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i]
    list[i] = Math.max(cur * list[i - 1], cur)
  }
  return Math.max(...list)
}
// @lc code=end

/*
// @lcpr case=start
// [2,3,-2,-4, 1, -2, 2, 7, 3, -2]\n
// @lcpr case=end
// @lcpr case=start
// [2,3,-2,4]\n
// @lcpr case=end

// @lcpr case=start
// [-2,0,-1]\n
// @lcpr case=end

 */
