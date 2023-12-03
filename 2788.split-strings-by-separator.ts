/*
 * @lc app=leetcode.cn id=2788 lang=typescript
 * @lcpr version=30102
 *
 * [2788] 按分隔符拆分字符串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function splitWordsBySeparator(words: string[], separator: string): string[] {
  return words.map((word) => word.split(separator).filter((s) => s !== '')).flat()
}
// @lc code=end

/*
// @lcpr case=start
// ["one.two.three","four.five","six"]\n"."\n
// @lcpr case=end

// @lcpr case=start
// ["$easy$","$problem$"]\n"$"\n
// @lcpr case=end

// @lcpr case=start
// ["|||"]\n"|"\n
// @lcpr case=end

 */
