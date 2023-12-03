/*
 * @lc app=leetcode.cn id=1221 lang=typescript
 * @lcpr version=21914
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
function balancedStringSplit(s: string): number {
  let [result, count] = [0, 0]
  for (const char of s) {
    count += char === 'R' ? 1 : -1
    if (count === 0) result++
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// "RLRRLLRLRL"\n
// @lcpr case=end

// @lcpr case=start
// "RLRRRLLRLL"\n
// @lcpr case=end

// @lcpr case=start
// "LLLLRRRR"\n
// @lcpr case=end

 */
