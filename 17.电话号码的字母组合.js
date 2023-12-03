/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
let map = new Map(
  [2, 'abc'],
  [3, 'def'],
  [4, 'ghi'],
  [5, 'jkl'],
  [6, 'mno'],
  [7, 'pqrs'],
  [8, 'tuv'],
  [9, 'wxyz'],
)
var letterCombinations = function(digits) {
  const result = []
  const list = digits.map(num => {
    return result.push(map.get(num).split(''))
  })
  for (let i = 0; i < list.length; i++) {
    const current = list[i]
    for (let j = i; j < list.length; j++) {
      const next = list[j]
      current.forEach(c => {
        next.forEach(n => result.push(`${c}${n}`))
      })
    }
  }
  return result
};
// @lc code=end

