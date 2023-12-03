/*
 * @lc app=leetcode.cn id=961 lang=typescript
 * @lcpr version=21913
 *
 * [961] 在长度 2N 的数组中找出重复 N 次的元素
 */

// @lc code=start
function repeatedNTimes(nums: number[]): number {
  const count = nums.length / 2
  const map = new Map<number, number>()
  for (const num of nums) {
    const c = (map.get(num) ?? 0) + 1
    if (c === count) return num
    map.set(num, c)
  }
  return -1
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,2,5,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,5,2,5,3,5,4]\n
// @lcpr case=end

 */
