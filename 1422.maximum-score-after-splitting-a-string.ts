/*
 * @lc app=leetcode.cn id=1422 lang=typescript
 * @lcpr version=21917
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
function maxScore(s: string): number {
  let left = s[0] === '0' ? 1 : 0
  let right = s.replace(/0/g, '').length - 1 + left
  let max = right + left
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === '0') {
      left += 1
      max = Math.max(max, left + right)
    } else {
      right--
    }
  }
  return max
}
// @lc code=end

/*
// @lcpr case=start
// "011101"\n
// @lcpr case=end

// @lcpr case=start
// "00111"\n
// @lcpr case=end

// @lcpr case=start
// "1111"\n
// @lcpr case=end

 */
