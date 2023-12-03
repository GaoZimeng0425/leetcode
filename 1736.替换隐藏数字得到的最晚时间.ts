/*
 * @Author: gaozimeng
 * @Date: 2021-07-24 10:14:53
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-07-24 10:29:38
 * @Description: Do not edit
 * @FilePath: /editor/Users/gaozimeng/.leetcode/1736.替换隐藏数字得到的最晚时间.ts
 */
/*
 * @lc app=leetcode.cn id=1736 lang=typescript
 *
 * [1736] 替换隐藏数字得到的最晚时间
 */

// @lc code=start
function maximumTime(time: string): string {
  let [h1, h2, _, m1, m2] = time
  if (h1 === '?') h1 = h2 >= '4' && h2 <= '9' ? '1' : '2'
  if (h2 === '?') h2 = h1 === '2' ? '3' : '9'
  if (m1 === '?') m1 = '5'
  if (m2 === '?') m2 = '9'
  return h1 + h2 + ':' + m1 + m2
}
// @lc code=end
