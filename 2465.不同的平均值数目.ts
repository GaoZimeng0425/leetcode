/*
 * @lc app=leetcode.cn id=2465 lang=typescript
 * @lcpr version=21908
 *
 * [2465] 不同的平均值数目
 */

// @lc code=start
function distinctAverages(nums: number[]): number {
  const set = new Set()
  nums.sort((a, b) => a - b)
  while (nums.length > 0) {
    const [start, end]: [number, number] = [nums.shift()!, nums.pop()!]
    set.add((start + end) / 2)
  }
  return set.size
}
// @lc code=end

/*
// @lcpr case=start
// [4,1,4,0,3,5,4,6]\n
// @lcpr case=end

// @lcpr case=start
// [1,100]\n
// @lcpr case=end

 */
