/*
 * @lc app=leetcode.cn id=1512 lang=typescript
 * @lcpr version=21917
 *
 * [1512] 好数对的数目
 */

// @lc code=start
function numIdenticalPairs(nums: number[]): number {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++
      }
    }
  }
  return count
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,1,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */
