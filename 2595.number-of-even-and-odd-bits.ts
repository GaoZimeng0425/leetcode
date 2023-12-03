/*
 * @lc app=leetcode.cn id=2595 lang=typescript
 * @lcpr version=21913
 *
 * [2595] 奇偶位数
 */

// @lc code=start
function evenOddBit(n: number): number[] {
  const result: number[] = [0, 0]
  n.toString(2)
    .split('')
    .reverse()
    .forEach((item, index) => {
      if (item !== '1') return
      if (index % 2 === 0) {
        result[0]++
      } else {
        result[1]++
      }
    })
  return result
}
// @lc code=end

/*
// @lcpr case=start
// 17\n
// @lcpr case=end

// @lcpr case=start
// 2\n
// @lcpr case=end

 */
