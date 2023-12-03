/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */


// @lc code=start
function permute(nums: number[]): number[][] {
  const result: number[][] = []
  const end: number = nums.length
  function backtrack (first: number = 0) {
    result.push(nums.slice())
    for (let i = first + 1; i < end; i++){
      // [nums[first], nums[i]] = [nums[i], nums[first]]
      backtrack(first + 1)
      // ;[nums[first], nums[i]] = [nums[i], nums[first]]
    }
  }
  backtrack()
  return result
};
// @lc code=end

