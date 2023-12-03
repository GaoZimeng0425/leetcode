/*
 * @lc app=leetcode.cn id=2264 lang=typescript
 * @lcpr version=21917
 *
 * [2264] 字符串中最大的 3 位相同数字
 */

// @lc code=start
function largestGoodInteger(num: string): string {
  let max = ''
  let i = 0
  while (i < num.length - 2) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      max = num[i] > max ? num[i] : max
      i += 2
    }
    i++
  }
  return max.repeat(3)
}
// @lc code=end

/*
// @lcpr case=start
// "6777133339"\n
// @lcpr case=end

// @lcpr case=start
// "2300019"\n
// @lcpr case=end

// @lcpr case=start
// "42352338"\n
// @lcpr case=end

 */
