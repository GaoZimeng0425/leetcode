/*
 * @lc app=leetcode.cn id=1920 lang=typescript
 * @lcpr version=21913
 *
 * [1920] 基于排列构建数组
 */

// @lc code=start
function buildArray(nums: number[]): number[] {
  return nums.reduce((result: number[], item, i) => {
    result[i] = nums[item]
    return result
  }, [])
}
// @lc code=end

/*
// @lcpr case=start
// [0,2,1,5,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [5,0,1,2,3,4]\n
// @lcpr case=end

 */
