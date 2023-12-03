/*
 * @lc app=leetcode.cn id=2283 lang=typescript
 * @lcpr version=30102
 *
 * [2283] 判断一个数的数字计数是否等于数位的值
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function digitCount(num: string): boolean {
  const map = new Map<number, number>()
  const list = `${num}`.split('').map((char) => parseInt(char))
  for (const char of list) {
    map.set(char, (map.get(char) || 0) + 1)
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i] !== (map.get(i) ?? 0)) return false
  }
  return true
}
// @lc code=end

/*
// @lcpr case=start
// "1210"\n
// @lcpr case=end

// @lcpr case=start
// "030"\n
// @lcpr case=end

 */
