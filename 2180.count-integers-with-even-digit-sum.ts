/*
 * @lc app=leetcode.cn id=2180 lang=typescript
 * @lcpr version=21917
 *
 * [2180] 统计各位数字之和为偶数的整数个数
 */

// @lc code=start
const even = (num: number): boolean => {
  let l: number[] = []
  while (num > 0) {
    l.push(num % 10)
    num = Math.floor(num / 10);
  }
  return l.reduce((a, b) => a + b, 0) % 2 === 0
}
function countEven(num: number): number {
  let count = 0
  for (let i = 1; i <= num; i++) {
    if (even(i)) count++
  }
  return count
};
// @lc code=end



/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 30\n
// @lcpr case=end

 */

