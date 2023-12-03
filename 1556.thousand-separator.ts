/*
 * @lc app=leetcode.cn id=1556 lang=typescript
 * @lcpr version=30103
 *
 * [1556] 千位分隔数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function thousandSeparator(n: number): string {
  const str = n.toString()
  let result = ''
  for (let i = str.length - 1; i >= 0; i -= 3) {
    const [a = '', b = '', c = ''] = [str[i - 2], str[i - 1], str[i]]
    result = `.${a}${b}${c}` + result
  }
  return result.slice(1)
}
// @lc code=end

/*
// @lcpr case=start
// 987\n
// @lcpr case=end

// @lcpr case=start
// 1234\n
// @lcpr case=end

// @lcpr case=start
// 123456789\n
// @lcpr case=end

// @lcpr case=start
// 0\n
// @lcpr case=end

 */
