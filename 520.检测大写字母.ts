/*
 * @lc app=leetcode.cn id=520 lang=typescript
 *
 * [520] 检测大写字母
 */

// @lc code=start
// 65 90
// const isUpperCase = (s: string) => s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90
// function detectCapitalUse(word: string): boolean {
//   if (word.length <= 1) return true
//   let isAllUpperCase: boolean = isUpperCase(word[0]) && isUpperCase(word[1])
//   for (let i = 1; i < word.length; i++) {
//     const w = word[i]
//     const isUp = isUpperCase(w)
//     if (isAllUpperCase) {
//       if (!isUp) return false
//     } else if (isUp) {
//       return false
//     }
//   }
//   return true
// };
function detectCapitalUse(word: string): boolean {
  return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word)
}
// @lc code=end

