/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let left = 0
  let right = s.length - 1
  const reg = /[^a-z0-9]/i
  while (left < right) {
    let cleft = s[left]
    let cright= s[right]
    if (reg.test(cleft)) {
      left++
      continue
    }
    if (reg.test(cright)) {
      right--
      continue
    }
    if (cleft.toLowerCase() !== cright.toLowerCase()) {
      return false
    }
    left++
    right--
  }
  return true
};
// @lc code=end

