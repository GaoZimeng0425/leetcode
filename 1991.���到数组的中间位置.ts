/*
 * @lc app=leetcode.cn id=1991 lang=typescript
 * @lcpr version=21908
 *
 * [1991] 找到数组的中间位置
 */

// @lc code=start
function findMiddleIndex(nums: number[]): number {
  const list = nums.slice(1)
  if (list.length === 0) return 0
  const acc = list.reduce((a, b) => a + b)
  let [start, end] = [0, acc]
  if (start === end) return 0
  for (let index = 1; index < nums.length; index++) {
    start += nums[index - 1]
    end -= nums[index]
    if (start === end) return index
  }
  return -1
}
// @lc code=end

/*
// @lcpr case=start
// [2,3,-1,8,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,-1,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,5]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
