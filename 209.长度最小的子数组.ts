/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(s: number, nums: number[]): number {
  let ans: number = Number.MAX_SAFE_INTEGER
  let start = 0
  let end = 0
  let cur: number = nums[0]
  while (start <= end && end < nums.length) {
    if (cur >= s) {
      ans = Math.min(end - start + 1, ans)
      cur -= (nums[start] + nums[end])
      start++
    } else {
      end++
    }
    cur += nums[end]
  }
  return ans === Number.MAX_SAFE_INTEGER ? 0 : ans
};
// @lc code=end

