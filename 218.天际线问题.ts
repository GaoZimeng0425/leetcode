/*
 * @lc app=leetcode.cn id=218 lang=typescript
 *
 * [218] 天际线问题
 */

// @lc code=start
const sort = (arr: number[][]) => arr.sort((a, b) => a[0] - b[0] || b[1] - a[1])
const remove = (arr: number[], height: number) => arr.splice(arr.findIndex((h) => h === height), 1)

function getSkyline(buildings: number[][]): number[][] {
  const boundaries: number[][] = [] // pos, height
  const result: number[][] = [] // pos, height
  const heightStack: number[] = [0]
  let preHeight: number
  for (const building of buildings) {
    const [left, right, height] = building
    boundaries.push([left, height])
    boundaries.push([right, -height])
  }
  sort(boundaries)
  for (const [pos, height] of boundaries) {
    if (height < 0) remove(heightStack, -height)
    if (height > 0) heightStack.push(height)

    const max = Math.max(...heightStack)
    if (preHeight !== max) {
      result.push([pos, max])
      preHeight = max
    }
  }
  return result
}

// function getSkyline(buildings: number[][]): number[][] {
//   const getBuildings = findBuildings(buildings)
//   const heightStack = []
//   const result: number[][] = []
//   const end = buildings[buildings.length - 1][1]
//   let start = 0
//   while (start <= end) {
//     const endBuildingIndex = getBuildings(start, 1)
//     const startBuildingIndex = getBuildings(start)
//     let startHeight
//     if (startBuildingIndex >= 0) {
//       startHeight = buildings[startBuildingIndex][2]
//       const maxHeight = heightStack[0] ?? 0
//       if (startHeight > maxHeight) {
//         result.push([start, startHeight])
//       }
//       heightStack.push(startHeight)
//       heightStack.sort((a, b) => b - a)
//     }
//     if (endBuildingIndex >= 0) {
//       const height = buildings[endBuildingIndex][2]
//       const i = heightStack.indexOf(height)
//       let pop = heightStack.splice(i, 1)
//       if (i === 0 && startHeight !== pop[0]) {
//         result.push([start, heightStack[0] ?? 0])
//       }
//     }
//     start++
//   }
//   return result
// };
// @lc code=end

