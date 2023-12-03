/*
 * @lc app=leetcode.cn id=1726 lang=typescript
 * @lcpr version=30102
 *
 * [1726] 同积元组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function tupleSameProduct(nums: number[]): number {
  const map = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const prev = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      const curr = nums[j]
      map.set(prev * curr, (map.get(prev * curr) ?? 0) + 1)
    }
  }
  console.log(map)
}
// @lc code=end

tupleSameProduct([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024])
/*
// @lcpr case=start
// [2,3,4,6]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,4,5,10]\n
// @lcpr case=end

 */
