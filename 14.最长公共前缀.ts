/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return ''
  if (strs.length === 1) return strs[0]
  return strs.reduce((a, b) => {
    let prefix = ''
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) break
      prefix += a[i]
    }
    return prefix
  })

  // let ans: number = 0
  // let str: string = ''
  // let first: string = strs[0]
  // while (ans < first.length) {
  //   let cur = first[ans]
  //   for (let i = 1; i < strs.length; i++) {
  //     const element = strs[i];
  //     if (!element) return str
  //     if (cur !== element[ans]) return str
  //   }
  //   str += cur
  //   ans++
  // }
  // return str
};
// @lc code=end

