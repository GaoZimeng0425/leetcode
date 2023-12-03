/*
 * @lc app=leetcode.cn id=2315 lang=typescript
 * @lcpr version=21917
 *
 * [2315] 统计星号
 */

// @lc code=start
function countAsterisks(s: string): number {
  let flag = false
  let count = 0
  for (const char of s) {
    if (char === '|') {
      flag = !flag
    } else if (char === '*' && !flag) {
      count++
    }
  }
  return count
}
// @lc code=end

/*
// @lcpr case=start
// "l|*e*et|c**o|*de|"\n
// @lcpr case=end

// @lcpr case=start
// "iamprogrammer"\n
// @lcpr case=end

// @lcpr case=start
// "yo|uar|e**|b|e***au|tifu|l"\n
// @lcpr case=end

 */
