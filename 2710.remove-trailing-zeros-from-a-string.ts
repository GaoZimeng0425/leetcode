/*
 * @lc app=leetcode.cn id=2710 lang=typescript
 * @lcpr version=21914
 *
 * [2710] 移除字符串中的尾随零
 */

// @lc code=start
function removeTrailingZeros(num: string): string {
  return num.replace(/\.?0*$/, '')
}
// @lc code=end

/*
// @lcpr case=start
// "51230100"\n
// @lcpr case=end

// @lcpr case=start
// "123"\n
// @lcpr case=end

 */
