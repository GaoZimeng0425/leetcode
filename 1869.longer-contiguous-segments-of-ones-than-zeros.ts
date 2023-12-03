/*
 * @lc app=leetcode.cn id=1869 lang=typescript
 * @lcpr version=21913
 *
 * [1869] 哪种连续子字符串更长
 */

// @lc code=start
function checkZeroOnes(s: string): boolean {
  const zero = Math.max(...s.split('1').map((x) => x.length))
  const one = Math.max(...s.split('0').map((x) => x.length))
  return one > zero
}
// @lc code=end

/*
// @lcpr case=start
// "1101"\n
// @lcpr case=end

// @lcpr case=start
// "111000"\n
// @lcpr case=end

// @lcpr case=start
// "110100010"\n
// @lcpr case=end

 */
