/*
 * @lc app=leetcode.cn id=2459 lang=typescript
 *
 * [2383] 赢得比赛需要的最少训练时长
 */

// @lc code=start
function minNumberOfHours(
  initialEnergy: number,
  initialExperience: number,
  energy: number[],
  experience: number[]
): number {
  let time = 0
  energy.forEach((ene, i) => {
    const exp = experience[i]
    if (exp >= initialExperience) {
      const cur = exp - initialExperience + 1
      time += cur
      initialExperience += cur
    }
    if (ene > initialEnergy) {
      const cur = ene - initialEnergy + 1
      time += cur
      initialEnergy += cur
    }
    initialEnergy -= ene
    initialExperience += exp
  })
  return time
}
// @lc code=end
