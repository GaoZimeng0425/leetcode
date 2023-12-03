/*
 * @lc app=leetcode.cn id=面试题 05.06 lang=typescript
 * @lcpr version=30102
 *
 * [面试题 05.06] 整数转换
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function convertInteger(A: number, B: number): number {
  let [s1, s2] = [A.toString(2), B.toString(2)]
  console.log(A ^ B, s1, s2)
  let count = 0
  for (let i = 0; i < Math.max(s1.length, s2.length); i++) {
    const last = -1 - i
    if (s1.at(last) !== s2.at(last)) {
      console.log(s1.at(last), s2.at(last))
      count++
    }
  }
  return count
}
// @lc code=end
console.log(convertInteger(826966453, -729934991))

/*
// @lcpr case=start
// 826966453\n-729934991\n
// @lcpr case=end

// @lcpr case=start
// 2\n1
// @lcpr case=end

 */
