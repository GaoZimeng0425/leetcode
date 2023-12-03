/*
 * @lc app=leetcode.cn id=LCR 018 lang=typescript
 * @lcpr version=30103
 *
 * [LCR 018] 验证回文串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function isPalindrome(s: string): boolean {
  const chars = s.toLowerCase().replace(/[^a-z0-9]/g, '')
  return chars === chars.split('').reverse().join('')
}
// @lc code=end
/*
// @lcpr case=start
// "0P"\n
// @lcpr case=end
// @lcpr case=start
// "A man, a plan, a canal: Panama"\n
// @lcpr case=end

// @lcpr case=start
// "race a car"\n
// @lcpr case=end

 */
