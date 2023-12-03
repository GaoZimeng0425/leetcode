/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let map = {}
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (map[c]) {
      map[c]++
    } else {
      map[c] = 1
    }
  }
  for (let i = 0; i < t.length; i++) {
    const c = t[i]
    if (map[c]) {
      map[c]--
      if (map[c] === 0) {
        Reflect.deleteProperty(map, c)
      }
    } else {
      return c
    }
  }
};
// @lc code=end

