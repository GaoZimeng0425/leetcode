/*
 * @lc app=leetcode.cn id=2578 lang=typescript
 * @lcpr version=21917
 *
 * [2578] 最小和分割
 */

// @lc code=start
function splitNum(num: number): number {
  const str = `${num}`.split('').sort((a, b) => (a > b ? 1 : -1))
  let [v1, v2] = ['', '']
  str.forEach((v, i) => {
    i % 2 === 0 ? (v1 += v) : (v2 += v)
  })
  return Number(v1) + Number(v2)
}

// @lc code=end

/*
// @lcpr case=start
// 4325\n
// @lcpr case=end

// @lcpr case=start
// 687\n
// @lcpr case=end

 */
