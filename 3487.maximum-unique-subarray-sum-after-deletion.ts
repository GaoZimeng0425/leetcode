/*
 * @lc app=leetcode.cn id=3487 lang=typescript
 * @lcpr version=30204
 *
 * [3487] 删除后的最大子数组元素和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function maxSum(nums: number[]): number {
  const set = [...new Set<number>(nums)]
  const positive = set.filter(num => num > 0)
  return positive.length > 0 ? positive.reduce((a, b) => a + b, 0) : Math.max(...set)
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [-10, -1]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,0,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,-1,-2,1,0,-1]\n
// @lcpr case=end

 */
