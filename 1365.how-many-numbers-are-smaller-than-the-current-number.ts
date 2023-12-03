/*
 * @lc app=leetcode.cn id=1365 lang=typescript
 * @lcpr version=21917
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
function smallerNumbersThanCurrent(nums: number[]): number[] {
  const result: number[] = Array(nums.length).fill(0)
  nums.forEach((num, index) => {
    nums.forEach((num2, index2) => {
      if (index !== index2 && num2 < num) {
        result[index]++
      }
    })
  })
  return result
}
// @lc code=end

/*
// @lcpr case=start
// [8,1,2,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [6,5,4,8]\n
// @lcpr case=end

// @lcpr case=start
// [7,7,7,7]\n
// @lcpr case=end

 */
