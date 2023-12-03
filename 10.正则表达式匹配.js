/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p) {
//   let [match] = new RegExp(`${p}`).exec(s) || []
//   return match !== undefined && match.length >= s.length
// };

var isMatch = function(s, p) {
  for (let i = 0; i < s.length; i++) {
    const str = s[i]
    p[i]
  }
};
// @lc code=end

