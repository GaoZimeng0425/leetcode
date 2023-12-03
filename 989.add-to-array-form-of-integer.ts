/*
 * @lc app=leetcode.cn id=989 lang=typescript
 * @lcpr version=21913
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
function addToArrayForm(num: number[], k: number): number[] {
  const klist = `${k}`.split('').map(Number)
  let flag = 0
  const result = []
  for (let i = 1; i <= Math.max(klist.length, num.length); i++) {
    const n1 = num.at(i * -1) || 0
    const n2 = klist.at(i * -1) || 0
    const sum = n1 + n2 + flag
    flag = sum >= 10 ? 1 : 0
    result.unshift(sum % 10)
  }
  if (flag) result.unshift(1)
  return result
}

// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4]\n34\n
// @lcpr case=end

// @lcpr case=start
// [2,7,4]\n181\n
// @lcpr case=end

// @lcpr case=start
// [2,1,5]\n806\n
// @lcpr case=end

 */
