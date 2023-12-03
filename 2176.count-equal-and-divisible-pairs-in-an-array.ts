/*
 * @lc app=leetcode.cn id=2176 lang=typescript
 * @lcpr version=21914
 *
 * [2176] 统计数组中相等且可以被整除的数对
 */

// @lc code=start
function countPairs(nums: number[], k: number): number {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        result++
      }
    }
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// [3,1,2,2,2,1,3]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4]\n1\n
// @lcpr case=end

 */
