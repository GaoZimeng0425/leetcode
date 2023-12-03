/*
 * @lc app=leetcode.cn id=2341 lang=typescript
 * @lcpr version=21917
 *
 * [2341] 数组能形成多少数对
 */

// @lc code=start
function numberOfPairs(nums: number[]): number[] {
  const set = new Set()
  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num)
    } else {
      set.add(num)
    }
  }
  return [(nums.length - set.size) / 2, set.size]
}
// @lc code=end
/*
// @lcpr case=start
// [1,3,2,1,3,2,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */
