/*
 * @lc app=leetcode.cn id=LCR 032 lang=typescript
 * @lcpr version=21913
 *
 * [LCR 032] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s === t) return false
  return s.split('').sort().join('') === t.split('').sort().join('')
}
// @lc code=end

/*
// @lcpr case=start
// "anagram"\n"nagaram"\n
// @lcpr case=end

// @lcpr case=start
// "rat"\n"car"\n
// @lcpr case=end

// @lcpr case=start
// "a"\n"a"\n
// @lcpr case=end

 */
