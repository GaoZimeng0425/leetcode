/*
 * @lc app=leetcode.cn id=605 lang=typescript
 * @lcpr version=21917
 *
 * [605] 种花问题
 */

// @lc code=start
const calculate = (n: number) => {
  if (n < 3) return 0
  if (n === 3) return 1
  return Math.floor((n - 3) / 2) + 1
}
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let s: number = 1
  let count: number = 0
  flowerbed.forEach((n) => {
    if (n === 0) {
      s++
    } else {
      count += calculate(s)
      s = 0
    }
  })
  count += calculate(s + 1)
  return count >= n
}
// @lc code=end

/*
// @lcpr case=start
// [1,0,0,0,1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,0,0,0,1]\n2\n
// @lcpr case=end

 */
