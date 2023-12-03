/*
 * @lc app=leetcode.cn id=2824 lang=typescript
 * @lcpr version=30102
 *
 * [2824] 统计和小于目标的下标对数目
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function countPairs(nums: number[], target: number): number {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) count++
    }
  }
  return count
}
// @lc code=end

/*
// @lcpr case=start
// [-1,1,2,3,1]\n2\n
// @lcpr case=end

// @lcpr case=start
// [-6,2,5,-2,-7,-1,3]\n-2\n
// @lcpr case=end

 */
