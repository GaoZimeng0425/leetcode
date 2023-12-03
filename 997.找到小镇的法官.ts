/*
 * @Author: gaozimeng
 * @Date: 2021-05-26 10:57:14
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-26 11:16:49
 * @Description: Do not edit
 * @FilePath: /webpack/Users/gaozimeng/.leetcode/997.找到小镇的法官.ts
 */
/*
 * @lc app=leetcode.cn id=997 lang=typescript
 *
 * [997] 找到小镇的法官
 *
 * https://leetcode-cn.com/problems/find-the-town-judge/description/
 *
 * algorithms
 * Easy (51.18%)
 * Likes:    120
 * Dislikes: 0
 * Total Accepted:    30.3K
 * Total Submissions: 58.9K
 * Testcase Example:  '2\n[[1,2]]'
 *
 * 在一个小镇里，按从 1 到 N 标记了 N 个人。传言称，这些人中有一个是小镇上的秘密法官。
 * 
 * 如果小镇的法官真的存在，那么：
 * 
 * 
 * 小镇的法官不相信任何人。
 * 每个人（除了小镇法官外）都信任小镇的法官。
 * 只有一个人同时满足属性 1 和属性 2 。
 * 
 * 
 * 给定数组 trust，该数组由信任对 trust[i] = [a, b] 组成，表示标记为 a 的人信任标记为 b 的人。
 * 
 * 如果小镇存在秘密法官并且可以确定他的身份，请返回该法官的标记。否则，返回 -1。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：N = 2, trust = [[1,2]]
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 输入：N = 3, trust = [[1,3],[2,3]]
 * 输出：3
 * 
 * 
 * 示例 3：
 * 
 * 输入：N = 3, trust = [[1,3],[2,3],[3,1]]
 * 输出：-1
 * 
 * 
 * 示例 4：
 * 
 * 输入：N = 3, trust = [[1,2],[2,3]]
 * 输出：-1
 * 
 * 
 * 示例 5：
 * 
 * 输入：N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
 * 输出：3
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= N <= 1000
 * trust.length <= 10000
 * trust[i] 是完全不同的
 * trust[i][0] != trust[i][1]
 * 1 <= trust[i][0], trust[i][1] <= N
 * 
 * 
 */

// @lc code=start
function findJudge(n: number, trust: number[][]): number {
  const l1 = Array.from({length: n}, () => 0)
  const l2 = Array.from({length: n}, () => 0)
  for (const [p, t] of trust) {
    l1[p - 1]++
    l2[t - 1]++
  }
  for (let i = 0; i < n; i++) {
    if (l1[i] === 0 && l2[i] === n - 1) {
      return i + 1
    }
  }
  return -1
}
// function findJudge(n: number, trust: number[][]): number {
//   if (n === 1 && !trust.length) return 1
//   const map: Map<number, number[]> = new Map()
//   const m: Map<number, number> = new Map()
//   for (const [person, t] of trust) {
//     const list = map.get(person) || []
//     m.set(t, (m.get(t) || 0) + 1)
//     map.set(person, list.concat(t))
//   }
//   let max: [number | null, number] = [null, Number.MIN_SAFE_INTEGER]
//   for (const p of m) {
//     if (max[1] < p[1]) max = p
//   }
//   return !map.has(max[0]) && max[1] === n - 1 ? max[0] : -1
// };
// @lc code=end

