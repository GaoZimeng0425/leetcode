/*
 * @lc app=leetcode.cn id=2729 lang=typescript
 * @lcpr version=21917
 *
 * [2729] 判断一个数是否迷人
 */

// @lc code=start
function isFascinating(n: number): boolean {
  const str = `${n}${n * 2}${n * 3}`
  const set = new Set(str)
  return set.size === 9 && !set.has('0') && str.length === 9
}
// @lc code=end

/*
// @lcpr case=start
// 783\n
// @lcpr case=end

// @lcpr case=start
// 100\n
// @lcpr case=end

 */
