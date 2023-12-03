/*
 * @lc app=leetcode.cn id=2224 lang=typescript
 * @lcpr version=21917
 *
 * [2224] 转化时间需要的最少操作数
 */

// @lc code=start
const diff = (m1: number, m2: number): number => {
  if (m1 === m2) return 0
  let count = 0
  let diff = m2 - m1
  count += Math.floor(diff / 60)
  diff %= 60
  count += Math.floor(diff / 15)
  diff %= 15
  count += Math.floor(diff / 5)
  diff %= 5
  return count + diff
}
function convertTime(current: string, correct: string): number {
  const [h1, m1] = current.split(':').map(Number)
  const [h2, m2] = correct.split(':').map(Number)
  const [mv1, mv2] = [m1 + h1 * 60, m2 + h2 * 60]
  return diff(mv1, mv2)
}

// @lc code=end

/*
// @lcpr case=start
// "09:41"\n"10:34"\n
// @lcpr case=end
// @lcpr case=start
// "02:30"\n"04:35"\n
// @lcpr case=end

// @lcpr case=start
// "11:00"\n"11:01"\n
// @lcpr case=end

 */
