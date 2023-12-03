/*
 * @lc app=leetcode.cn id=506 lang=typescript
 *
 * [506] 相对名次
 *
 * https://leetcode-cn.com/problems/relative-ranks/description/
 *
 * algorithms
 * Easy (55.06%)
 * Likes:    74
 * Dislikes: 0
 * Total Accepted:    16.2K
 * Total Submissions: 29K
 * Testcase Example:  '[5,4,3,2,1]'
 *
 * 给出 N 名运动员的成绩，找出他们的相对名次并授予前三名对应的奖牌。前三名运动员将会被分别授予 “金牌”，“银牌” 和“ 铜牌”（"Gold
 * Medal", "Silver Medal", "Bronze Medal"）。
 * 
 * (注：分数越高的选手，排名越靠前。)
 * 
 * 示例 1:
 * 
 * 
 * 输入: [5, 4, 3, 2, 1]
 * 输出: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
 * 解释: 前三名运动员的成绩为前三高的，因此将会分别被授予 “金牌”，“银牌”和“铜牌” ("Gold Medal", "Silver Medal"
 * and "Bronze Medal").
 * 余下的两名运动员，我们只需要通过他们的成绩计算将其相对名次即可。
 * 
 * 提示:
 * 
 * 
 * N 是一个正整数并且不会超过 10000。
 * 所有运动员的成绩都不相同。
 * 
 * 
 */
// @lc code=start
function findRelativeRanks(score: number[]): string[] {
  const result: string[] = []
  const m = ["Gold Medal", "Silver Medal", "Bronze Medal"]
  let max = score[0]
  let count = 0
  for (let i = 1; i < score.length; i++) {
    max = Math.max(max, score[i])
  }
  const stack: (number|undefined)[] = Array.from({ length: max })
  for (let i = 0; i < score.length; i++) {
    stack[score[i]] = i
  }
  for (let i = stack.length - 1; i >= 0 ; i--) {
    const key: number | undefined = stack[i]
    if (key) {
      result[key] = m[count] || (count + 1).toString()
      count++
    }
  }
  return result
}
// @lc code=end

