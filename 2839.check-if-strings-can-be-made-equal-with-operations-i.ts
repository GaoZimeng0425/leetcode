/*
 * @lc app=leetcode.cn id=2839 lang=typescript
 * @lcpr version=30103
 *
 * [2839] 判断通过操作能否让字符串相等 I
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function canBeEqual(s1: string, s2: string): boolean {
  const [a, b, c, d] = s1.split('')
  const [m, n, x, y] = s2.split('')
  return (
    [a, c].sort().join() == [m, x].sort().join() && [b, d].sort().join() == [n, y].sort().join()
  )
}
// @lc code=end

/*
// @lcpr case=start
// "abcd"\n"cdab"\n
// @lcpr case=end

// @lcpr case=start
// "abcd"\n"dacb"\n
// @lcpr case=end

 */
