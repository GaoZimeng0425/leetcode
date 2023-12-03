/*
 * @lc app=leetcode.cn id=2716 lang=typescript
 * @lcpr version=30102
 *
 * [2716] 最小化字符串长度
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function minimizedStringLength(s: string): number {
  return new Set<string>(s).size
}
// @lc code=end
/*
// @lcpr case=start
// "aaabc"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

// @lcpr case=start
// "dddaaa"\n
// @lcpr case=end

 */
