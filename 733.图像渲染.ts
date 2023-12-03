/*
 * @lc app=leetcode.cn id=733 lang=typescript
 *
 * [733] 图像渲染
 */

// @lc code=start
const createStack = (
  image: number[][],
  r: number,
  c: number,
  color: number
): [number, number][] => {
  const [maxR, maxC] = [image.length, image[0].length]
  const [prevR, prevC] = [r - 1, c - 1]
  const [nextR, nextC] = [r + 1, c + 1]
  const result: [number, number][] = []
  if (prevC > -1 && image[r][prevC] === color) {
    result.push([r, prevC])
  }
  if (prevR > -1 && image[prevR][c] === color) {
    result.push([prevR, c])
  }
  if (nextR < maxR && image[nextR][c] === color) {
    result.push([nextR, c])
  }
  if (nextC < maxC && image[r][nextC] === color) {
    result.push([r, nextC])
  }
  return result
}
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const stack: [number, number][] = [[sr, sc]]
  const currentColor = image[sr][sc]
  if (currentColor === color) return image
  while (stack.length) {
    const [r, c] = stack.pop()!
    stack.push(...createStack(image, r, c, currentColor))
    image[r][c] = color
  }
  return image
}
// @lc code=end
