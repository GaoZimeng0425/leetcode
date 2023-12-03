/*
 * @lc app=leetcode.cn id=412 lang=typescript
 *
 * [412] Fizz Buzz
 *
 * https://leetcode-cn.com/problems/fizz-buzz/description/
 *
 * algorithms
 * Easy (65.08%)
 * Likes:    94
 * Dislikes: 0
 * Total Accepted:    60.6K
 * Total Submissions: 91.7K
 * Testcase Example:  '3'
 *
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
 * 
 * 1. 如果 n 是3的倍数，输出“Fizz”；
 * 
 * 2. 如果 n 是5的倍数，输出“Buzz”；
 * 
 * 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
 * 
 * 示例：
 * 
 * n = 15,
 * 
 * 返回:
 * [
 * ⁠   "1",
 * ⁠   "2",
 * ⁠   "Fizz",
 * ⁠   "4",
 * ⁠   "Buzz",
 * ⁠   "Fizz",
 * ⁠   "7",
 * ⁠   "8",
 * ⁠   "Fizz",
 * ⁠   "Buzz",
 * ⁠   "11",
 * ⁠   "Fizz",
 * ⁠   "13",
 * ⁠   "14",
 * ⁠   "FizzBuzz"
 * ]
 * 
 * 
 */

// @lc code=start
const f = 'Fizz'
const b = 'Buzz'
function fizzBuzz(n: number): string[] {
  const result: string[] = []
  for (let i = 1; i <= n; i++) {
    const isF = i % 3 === 0
    const isB = i % 5 === 0
    let s = ''
    if (isF) s += f
    if (isB) s += b
    if (s === '') s += i
    result.push(s)
  }
  return result
};
// @lc code=end

