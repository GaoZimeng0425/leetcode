/*
 * @Author: gaozimeng
 * @Date: 2021-05-04 10:31:44
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-05 11:53:55
 * @Description: Do not edit
 * @FilePath: /ts-axios/Users/gaozimeng/.leetcode/788.旋转数字.ts
 */
/*
 * @lc app=leetcode.cn id=788 lang=typescript
 *
 * [788] 旋转数字
 *
 * https://leetcode-cn.com/problems/rotated-digits/description/
 *
 * algorithms
 * Easy (60.28%)
 * Likes:    90
 * Dislikes: 0
 * Total Accepted:    16.6K
 * Total Submissions: 27.5K
 * Testcase Example:  '10'
 *
 * 我们称一个数 X 为好数, 如果它的每位数字逐个地被旋转 180 度后，我们仍可以得到一个有效的，且和 X 不同的数。要求每位数字都要被旋转。
 * 
 * 如果一个数的每位数字被旋转以后仍然还是一个数字， 则这个数是有效的。0, 1, 和 8 被旋转后仍然是它们自己；2 和 5
 * 可以互相旋转成对方（在这种情况下，它们以不同的方向旋转，换句话说，2 和 5 互为镜像）；6 和 9
 * 同理，除了这些以外其他的数字旋转以后都不再是有效的数字。
 * 
 * 现在我们有一个正整数 N, 计算从 1 到 N 中有多少个数 X 是好数？
 * 
 * 
 * 
 * 示例：
 * 
 * 输入: 10
 * 输出: 4
 * 解释: 
 * 在[1, 10]中有四个好数： 2, 5, 6, 9。
 * 注意 1 和 10 不是好数, 因为他们在旋转之后不变。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * N 的取值范围是 [1, 10000]。
 * 
 * 
 */

// @lc code=start
let rota = {
  0: 0,
  1: 1,
  2: 5,
  5: 2,
  6: 9,
  8: 8,
  9: 6
}
const rotaNumber = (str: string): string => {
  let result = ''
  for (const letter of str) {
    let cur = rota[letter]
    if (cur == null) {
      result = ''
      break
    }
    result += cur
  }
  return result
}

function rotatedDigits(N: number): number {
  let result: number = 0
  while (N > 0) {
    const char = N.toString()
    const num = rotaNumber(char)
    if (num && N !== parseInt(num)) {
      result++
    }
    N--
  }
  return result
};
// @lc code=end

