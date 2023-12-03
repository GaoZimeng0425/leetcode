/*
 * @lc app=leetcode.cn id=1550 lang=typescript
 * @lcpr version=21913
 *
 * [1550] 存在连续三个奇数的数组
 */

// @lc code=start
const isOdd = (num: number): boolean => num % 2 !== 0
function threeConsecutiveOdds(arr: number[]): boolean {
  let i = 0
  while (i < arr.length) {
    let count = 0
    while (isOdd(arr[i]) && i < arr.length) {
      i++
      if (++count === 3) return true
    }
    i++
  }
  return false
}
// @lc code=end

/*
// @lcpr case=start
// [2,6,4,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,34,3,4,5,7,23,12]\n
// @lcpr case=end

 */
