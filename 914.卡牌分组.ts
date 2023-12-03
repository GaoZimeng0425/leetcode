/*
 * @Author: gaozimeng
 * @Date: 2021-05-21 11:18:02
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-21 11:35:56
 * @Description: Do not edit
 * @FilePath: /vite/Users/gaozimeng/.leetcode/914.卡牌分组.ts
 */
/*
 * @lc app=leetcode.cn id=914 lang=typescript
 *
 * [914] 卡牌分组
 *
 * https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/description/
 *
 * algorithms
 * Easy (39.06%)
 * Likes:    227
 * Dislikes: 0
 * Total Accepted:    46.7K
 * Total Submissions: 120.1K
 * Testcase Example:  '[1,2,3,4,4,3,2,1]'
 *
 * 给定一副牌，每张牌上都写着一个整数。
 * 
 * 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
 * 
 * 
 * 每组都有 X 张牌。
 * 组内所有的牌上都写着相同的整数。
 * 
 * 
 * 仅当你可选的 X >= 2 时返回 true。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[1,2,3,4,4,3,2,1]
 * 输出：true
 * 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
 * 
 * 
 * 示例 2：
 * 
 * 输入：[1,1,1,2,2,2,3,3]
 * 输出：false
 * 解释：没有满足要求的分组。
 * 
 * 
 * 示例 3：
 * 
 * 输入：[1]
 * 输出：false
 * 解释：没有满足要求的分组。
 * 
 * 
 * 示例 4：
 * 
 * 输入：[1,1]
 * 输出：true
 * 解释：可行的分组是 [1,1]
 * 
 * 
 * 示例 5：
 * 
 * 输入：[1,1,2,2,2,2]
 * 输出：true
 * 解释：可行的分组是 [1,1]，[2,2]，[2,2]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= deck.length <= 10000
 * 0 <= deck[i] < 10000
 * 
 * 
 * 
 * 
 */
// @lc code=start
function gcd(a, b): number {
  const r = a % b
  if (r === 0) return b
  return gcd(b, r)
}
function hasGroupsSizeX(deck: number[]): boolean {
  const hash = deck.reduce((r, i) => {
    r[i] = (r[i] || 0) + 1
    return r
  }, {})
  let g: number = -1
  for (const k in hash) {
    const count = hash[k]
    if (g === -1) g = count
    g = gcd(g, count)
  }
  return g > 1
};
// @lc code=end

