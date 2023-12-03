/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 * @lcpr version=21913
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
function removeDuplicates(s: string): string {
  const stack: string[] = []
  for (const char of s) {
    if (stack.length > 0 && stack.at(-1) === char) stack.pop()
    else stack.push(char)
  }
  return stack.join('')
}
// @lc code=end

/*
// @lcpr case=start
// "abbaca"\n
// @lcpr case=end
// @lcpr case=start
// "aababaab"\n
// @lcpr case=end

 */
