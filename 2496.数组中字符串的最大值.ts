/*
 * @lc app=leetcode.cn id=2496 lang=typescript
 * @lcpr version=21909
 *
 * [2496] 数组中字符串的最大值
 */

// @lc code=start
const isOnlyNumber = (str: string) => /^[0-9]+$/.test(str)
function maximumValue(strs: string[]): number {
  return strs.reduce((prev, item) => {
    if (isOnlyNumber(item)) {
      return Math.max(prev, parseInt(item, 10))
    } else {
      return Math.max(prev, item.length)
    }
  }, 0)
}
// @lc code=end

/*
// @lcpr case=start
// ["alic3","bob","3","4","00000"]\n
// @lcpr case=end

// @lcpr case=start
// ["1","01","001","0001"]\n
// @lcpr case=end

 */
