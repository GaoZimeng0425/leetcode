/*
 * @lc app=leetcode.cn id=1041 lang=typescript
 *
 * [1041] 困于环中的机器人
 */

// @lc code=start
type Point = [number, number]

function isRobotBounded(instructions: string): boolean {
  const point: Point = [0, 0]
  let direction = 0
  const steps: string[] = instructions.split('')
  steps.forEach((step) => {
    if (step === 'R') {
      direction = (direction + 1) % 4
    } else if (step === 'L') {
      direction = (4 + (direction - 1)) % 4
    } else {
      switch (direction) {
        case 0:
          point[0] += 1
          break
        case 1:
          point[1] += 1
          break
        case 2:
          point[0] -= 1
          break
        case 3:
          point[1] -= 1
          break
      }
    }
  })

  return direction !== 0 || point.every((v) => v === 0)
}
// @lc code=end
