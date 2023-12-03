/*
 * @lc app=leetcode.cn id=213 lang=typescript
 * @lcpr version=21917
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])
  return Math.max(
    robExec(nums, 0, nums.length - 2),
    robExec(nums, 1, nums.length - 1)
  )
};
const robExec = (nums: number[], start: number, end: number) =>  {
  let max = nums[start]
  const list: number[] = [max]
  for (let i = 1; i <= end - start; i++) {
    max = Math.max(nums[i + start] + (list[i - 2] ?? 0), list[i - 1])
    list[i] = max
  }
  return max
}

// @lc code=end



/*
// @lcpr case=start
// [0]\n
// @lcpr case=end
// @lcpr case=start
// [2,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */

