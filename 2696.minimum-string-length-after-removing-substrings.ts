/*
 * @lc app=leetcode.cn id=2696 lang=typescript
 * @lcpr version=21913
 *
 * [2696] 删除子串后的字符串最小长度
 */

// @lc code=start
const reg = /(AB)|(CD)/
function minLength(s: string): number {
  while (reg.test(s)) {
    s = s.replace(reg, '')
  }
  return s.length
}
// @lc code=end

/*
// @lcpr case=start
// "ABFCACDB"\n
// @lcpr case=end

// @lcpr case=start
// "ACBBD"\n
// @lcpr case=end

 */
