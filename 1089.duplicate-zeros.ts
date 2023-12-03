/*
 * @lc app=leetcode.cn id=1089 lang=typescript
 * @lcpr version=21913
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  let i = 0
  const { length } = arr
  while (i < length) {
    if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0)
      arr.pop()
      i++
    }
    i++
  }
}
// @lc code=end

/*
// @lcpr case=start
// [1,0,2,3,0,4,5,0]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */
