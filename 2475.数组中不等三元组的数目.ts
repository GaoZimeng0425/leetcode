/*
 * @lc app=leetcode.cn id=2475 lang=typescript
 * @lcpr version=21909
 *
 * [2475] 数组中不等三元组的数目
 */

// @lc code=start
function unequalTriplets(nums: number[]): number {
  const { length } = nums
  let result = 0
  for (let i = 0; i < length; i++) {
    const ie = nums[i]
    for (let j = i + 1; j < length; j++) {
      const je = nums[j]
      for (let k = j + 1; k < length; k++) {
        const ke = nums[k]
        if (ie !== je && je !== ke && ie !== ke) {
          result++
        }
      }
    }
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// [4,4,2,4,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,1,1]\n
// @lcpr case=end

 */
