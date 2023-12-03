/*
 * @lc app=leetcode.cn id=1437 lang=typescript
 * @lcpr version=21917
 *
 * [1437] 是否所有 1 都至少相隔 k 个元素
 */

// @lc code=start
function kLengthApart(nums: number[], k: number): boolean {
  let i = -Infinity
  while (i < nums.length - 1) {
    const j = nums.indexOf(1, i + 1)
    if (j === -1) return true
    if (j - i - 1 < k) return false
    i = j
  }
  return true
}
// @lc code=end
/*
// @lcpr case=start
// [1,0,0,0,1,0,0,1]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,0,0,1,0,1]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,1,1]\n0\n
// @lcpr case=end

// @lcpr case=start
// [0,1,0,1]\n1\n
// @lcpr case=end

 */
