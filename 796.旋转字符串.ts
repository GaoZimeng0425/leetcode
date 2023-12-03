/*
 * @Author: gaozimeng
 * @Date: 2021-05-05 11:54:21
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-05 12:00:14
 * @Description: Do not edit
 * @FilePath: /ts-axios/Users/gaozimeng/.leetcode/796.旋转字符串.ts
 */
/*
 * @lc app=leetcode.cn id=796 lang=typescript
 *
 * [796] 旋转字符串
 *
 * https://leetcode-cn.com/problems/rotate-string/description/
 *
 * algorithms
 * Easy (51.11%)
 * Likes:    126
 * Dislikes: 0
 * Total Accepted:    18.9K
 * Total Submissions: 36.6K
 * Testcase Example:  '"abcde"\n"cdeab"'
 *
 * 给定两个字符串, A 和 B。
 * 
 * A 的旋转操作就是将 A 最左边的字符移动到最右边。 例如, 若 A = 'abcde'，在移动一次之后结果就是'bcdea'
 * 。如果在若干次旋转操作之后，A 能变成B，那么返回True。
 * 
 * 
 * 示例 1:
 * 输入: A = 'abcde', B = 'cdeab'
 * 输出: true
 * 
 * 示例 2:
 * 输入: A = 'abcde', B = 'abced'
 * 输出: false
 * 
 * 注意：
 * 
 * 
 * A 和 B 长度不超过 100。
 * 
 * 
 */

// @lc code=start
function rotateString(A: string, B: string): boolean {
  let n = A.length + 1
  while (--n >= 0) {
    if (A === B) {
      return true
    }
    A = A.slice(1) + A.slice(0, 1)
  }
  return false
};
// @lc code=end

