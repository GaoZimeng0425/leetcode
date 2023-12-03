/*
 * @lc app=leetcode.cn id=2108 lang=typescript
 * @lcpr version=21913
 *
 * [2108] 找出数组中的第一个回文字符串
 */

// @lc code=start
const isPalindrome = (s: string): boolean => s === s.split('').reverse().join('')
function firstPalindrome(words: string[]): string {
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) return words[i]
  }
  return ''
}
// @lc code=end

/*
// @lcpr case=start
// ["abc","car","ada","racecar","cool"]\n
// @lcpr case=end

// @lcpr case=start
// ["notapalindrome","racecar"]\n
// @lcpr case=end

// @lcpr case=start
// ["def","ghi"]\n
// @lcpr case=end

 */
