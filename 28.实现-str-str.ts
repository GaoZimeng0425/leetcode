/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
// function strStr(haystack: string, needle: string): number {
//   if (needle === '') return 0
//   for (let i = 0; i < haystack.length; i++) {
//     const str = haystack[i];
//     if (str === needle[0]) {
//       if (needle.length === 1) return i
//       for (let j = 1; j < needle.length; j++) {
//         const t = needle[j];
//         if (haystack[i + j] !== t) {
//           break
//         } else if (j === needle.length - 1) {
//           return i
//         }
//       }
//     }
//   }
//   return -1
// };
// kmp
function strStr(haystack: string, needle: string): number {
  if (!needle.length) return 0
  let l = needle.length
  for (let i = 0; i < haystack.length; i++) {
    const s = haystack.substr(i, l);
    if (s === needle) return i
  }
  return -1
};
// @lc code=end

