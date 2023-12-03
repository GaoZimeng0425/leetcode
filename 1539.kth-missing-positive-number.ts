/*
 * @lc app=leetcode.cn id=1539 lang=typescript
 * @lcpr version=21917
 *
 * [1539] 第 k 个缺失的正整数
 */

// @lc code=start
function findKthPositive(arr: number[], k: number): number {
  let i = 1
  let pop = arr.shift()
  while (k) {
    if (pop !== i) {
      k--
    } else {
      pop = arr.shift()
    }
    i++
  }
  return i - 1
};
// @lc code=end



/*
// @lcpr case=start
// [2,3,4,7,11]\n5\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4]\n2\n
// @lcpr case=end

 */

