/*
 * @lc app=leetcode.cn id=1346 lang=typescript
 * @lcpr version=21917
 *
 * [1346] 检查整数及其两倍数是否存在
 */

// @lc code=start
function checkIfExist(arr: number[]): boolean {
  const list = arr.sort((a, b) => a - b)
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (i === j) continue
      if (list[i] * 2 === list[j]) return true
    }
  }
  return false
}
// @lc code=end
/*
// @lcpr case=start
// [10,2,5,3]\n
// @lcpr case=end

// @lcpr case=start
// [7,1,14,11]\n
// @lcpr case=end

// @lcpr case=start
// [3,1,7,11]\n
// @lcpr case=end

 */
