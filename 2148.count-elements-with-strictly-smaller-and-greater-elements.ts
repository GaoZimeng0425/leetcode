/*
 * @lc app=leetcode.cn id=2148 lang=typescript
 * @lcpr version=21914
 *
 * [2148] 元素计数
 */

// @lc code=start
function countElements(nums: number[]): number {
  if (nums.length <= 2) return 0
  nums.sort((a, b) => a - b)
  const [min, max] = [nums[0], nums.at(-1)!]
  let { length } = nums
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === min || nums[i] === max) length -= 1
  }
  return length
}
// @lc code=end

/*
// @lcpr case=start
// [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]\n
// @lcpr case=end
// @lcpr case=start
// [11,7,2,15]\n
// @lcpr case=end

// @lcpr case=start
// [-3,3,3,90]\n
// @lcpr case=end

 */
