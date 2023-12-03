/*
 * @lc app=leetcode.cn id=2169 lang=typescript
 * @lcpr version=21917
 *
 * [2169] 得到 0 的操作数
 */

// @lc code=start
function countOperations(num1: number, num2: number): number {
  let count = 0
  while(num1 !== 0 && 0 !== num2) {
    num1 > num2 ? num1 -= num2 : num2 -= num1
    count++
  }
  return count
};
// @lc code=end



/*
// @lcpr case=start
// 2\n3\n
// @lcpr case=end

// @lcpr case=start
// 10\n10\n
// @lcpr case=end

 */

