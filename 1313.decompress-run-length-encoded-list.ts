/*
 * @lc app=leetcode.cn id=1313 lang=typescript
 * @lcpr version=21917
 *
 * [1313] 解压缩编码列表
 */

// @lc code=start
function decompressRLElist(nums: number[]): number[] {
  const result: number[] = []
  for (let i = 1; i < nums.length; i += 2) {
    const [freq, val] = [nums[i - 1], nums[i]]
    result.push(...Array(freq).fill(val))
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2,3]\n
// @lcpr case=end

 */
