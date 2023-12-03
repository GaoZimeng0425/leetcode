/*
 * @lc app=leetcode.cn id=482 lang=typescript
 * @lcpr version=21913
 *
 * [482] 密钥格式化
 */

// @lc code=start
function licenseKeyFormatting(s: string, k: number): string {
  const str = s.replaceAll('-', '')
  const r: string[] = []
  for (let i = str.length; i > 0; i -= k) {
    r.unshift(str.slice(Math.max(i - k, 0), i))
  }
  return r.join('-').toUpperCase()
}
// @lc code=end

// console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4))
/*
// @lcpr case=start
// "5F3Z-2e-9-w"\n4\n
// @lcpr case=end

// @lcpr case=start
// "2-5g-3-J"\n2\n
// @lcpr case=end

 */
