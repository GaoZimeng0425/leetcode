/*
 * @lc app=leetcode.cn id=228 lang=typescript
 * @lcpr version=21913
 *
 * [228] 汇总区间
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  const result: string[] = []
  let i = 0
  while (i < nums.length) {
    const current = nums[i]
    let next = nums[i + 1]

    if (next - 1 === current) {
      i++
      while (nums[i] === nums[i + 1] - 1) {
        i++
      }
      result.push(`${current}->${nums[i]}`)
    } else {
      result.push(`${current}`)
    }
    i++
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// [0,1,2,4,5,7]\n
// @lcpr case=end

// @lcpr case=start
// [0,2,3,4,6,8,9]\n
// @lcpr case=end

 */
