/*
 * @lc app=leetcode.cn id=2154 lang=typescript
 * @lcpr version=21914
 *
 * [2154] 将找到的值乘以 2
 */

// @lc code=start
function findFinalValue(nums: number[], original: number): number {
  const set = new Set(nums)
  while (set.has(original)) {
    original *= 2
  }
  return original
}
// @lc code=end

/*
// @lcpr case=start
// [5,3,6,1,12]\n3\n
// @lcpr case=end

// @lcpr case=start
// [2,7,9]\n4\n
// @lcpr case=end

 */
