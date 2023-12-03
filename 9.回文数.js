/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//   x = x.toString()
//   let left = 0
//   let right = x.length - 1
//   while (left < right) {
//     if (x[left] !== x[right]) return false
//     left++
//     right--
//   }
//   return true
// };

// var isPalindrome = function(x) {
//   if (x < 0) return false
//   let l = Math.floor(Math.log10(x))
//   let m
//   let left
//   let right
//   while (l >= 0) {
//     m = Math.pow(10, l)
//     left = x % 10
//     right = Math.floor(x / m)
//     if (left !== right) return false
//     x = Math.floor((x - right * m) / 10)
//     l -= 2
//   }
//   return true
// }

var isPalindrome = function(x) {
  if (x < 0) return false
  let ans = 0
  // let pop
  // while (x > 10) {
  //   pop = x % 10
  //   ans = ans * 10 + pop
  //   x = Math.floor(x / 10)
  // }
  // return ans === x
}
// @lc code=end

