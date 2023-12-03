/*
 * @lc app=leetcode.cn id=2337 lang=typescript
 * @lcpr version=21913
 *
 * [2337] 移动片段得到字符串
 */

// @lc code=start
var canChange = function (start: string, target: string) {
  if (start.replaceAll('_', '') !== target.replaceAll('_', '')) return false
  let j = 0
  for (let i = 0; i < start.length; i++) {
    if (start[i] === '_') continue
    while (target[j] === '_') j++
    if (i !== j && (start[i] === 'L') === i < j) {
      return false
    }
    j++
  }
  return true
}
// @lc code=end

/*
// @lcpr case=start
// "_L__R__R_"\n"L______RR"\n
// @lcpr case=end

// @lcpr case=start
// "R_L_"\n"__LR"\n
// @lcpr case=end

// @lcpr case=start
// "_R"\n"R_"\n
// @lcpr case=end

 */
