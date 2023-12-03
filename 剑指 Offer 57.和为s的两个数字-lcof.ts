/*
 * @lc app=leetcode.cn id=剑指 Offer 57 lang=typescript
 * @lcpr version=21914
 *
 * [剑指 Offer 57] 和为s的两个数字
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let set = new Set<number>()

  for (const n of nums) {
    if (set.has(n)) return [n, target - n]
    set.add(target - n)
  }

  return []
}
// @lc code=end

/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [10,26,30,31,47,60]\n40\n
// @lcpr case=end

 */
