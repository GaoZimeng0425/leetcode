/*
 * @lc app=leetcode.cn id=2089 lang=typescript
 * @lcpr version=21913
 *
 * [2089] 找出数组排序后的目标下标
 */

// @lc code=start
function targetIndices(nums: number[], target: number): number[] {
  return nums
    .sort((a, b) => a - b)
    .reduce((result, item, i) => {
      if (item === target) result.push(i)
      return result
    }, [] as number[])
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,5,2,3]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,5,2,3]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,2,5,2,3]\n5\n
// @lcpr case=end

// @lcpr case=start
// [1,2,5,2,3]\n4\n
// @lcpr case=end

 */
