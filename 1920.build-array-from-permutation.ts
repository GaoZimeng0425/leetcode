/*
 * @lc app=leetcode.cn id=1920 lang=typescript
 * @lcpr version=21913
 *
 * [1920] 基于排列构建数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
const buildArray = (nums: number[]): number[] => nums.map((n) => nums[n])
// @lc code=end

/*
// @lcpr case=start
// [0,2,1,5,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [5,0,1,2,3,4]\n
// @lcpr case=end

 */
