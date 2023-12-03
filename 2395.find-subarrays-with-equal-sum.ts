/*
 * @lc app=leetcode.cn id=2395 lang=typescript
 * @lcpr version=21913
 *
 * [2395] 和相等的子数组
 */

// @lc code=start
function findSubarrays(nums: number[]): boolean {
  if (nums.length < 2) return false
  const set = new Set()
  for (let i = 0; i < nums.length - 1; i++) {
    const num = nums[i] + nums[i + 1]
    if (set.has(num)) return true
    set.add(num)
  }
  return false
}
// @lc code=end

/*
// @lcpr case=start
// [4,2,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

 */
