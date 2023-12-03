/*
 * @lc app=leetcode.cn id=1748 lang=typescript
 *
 * [1626] 无矛盾的最佳球队
 */

// @lc code=start
function bestTeamScore(scores: number[], ages: number[]): number {
  const list: [[number, number], number][] = scores.map((s, i) => [[s, s], ages[i]])
  ages.forEach((curAge, i) => {
    const curScore = scores[i]
    list.forEach(([[score, acc], age], j) => {
      if (curAge > age && curScore < score) return
      if (age === curAge) return
      console.log('----', age, curAge, '---', curScore, score)
      list[j][0][1] = acc + curScore
    })
  })
  let max = 0
  console.log(list)

  return max
}

const s = bestTeamScore([1, 2, 3, 5], [8, 9, 10, 1])
console.log('[高子蒙] : file: 1626.判断能否形成等差数列.ts:24 :  s:', s)
// @lc code=end
