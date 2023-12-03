/*
 * @Author: gaozimeng
 * @Date: 2021-07-24 16:02:25
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-07-24 16:20:40
 * @Description: Do not edit
 * @FilePath: /ts-axios/Users/gaozimeng/.leetcode/1893.检查是否区域内所有整数都被覆盖.ts
 */
/*
 * @lc app=leetcode.cn id=1893 lang=typescript
 *
 * [1893] 检查是否区域内所有整数都被覆盖
 */

// @lc code=start
function isCovered(ranges: number[][], left: number, right: number): boolean {
  const set: Set<number> = new Set()
	while (left <= right) set.add(left++)
	console.log(set, '<<<')
  for (const [left, right] of ranges) {
    for (let i = left; i <= right; i++) set.has(i) && set.delete(i)
  }
  return set.size === 0
}
// @lc code=end
