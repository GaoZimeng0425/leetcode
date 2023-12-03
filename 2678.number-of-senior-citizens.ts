/*
 * @lc app=leetcode.cn id=2678 lang=typescript
 * @lcpr version=21917
 *
 * [2678] 老人的数目
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function countSeniors(details: string[]): number {
  return details.filter((detail) => parseInt(detail.slice(11, 13)) > 60).length
}
// @lc code=end

/*
// @lcpr case=start
// ["7868190130M7522","5303914400F9211","9273338290F6010"]\n
// @lcpr case=end

// @lcpr case=start
// ["1313579440F2036","2921522980M5644"]\n
// @lcpr case=end

 */
