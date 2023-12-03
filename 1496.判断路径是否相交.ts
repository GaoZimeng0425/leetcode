/*
 * @lc app=leetcode.cn id=1496 lang=typescript
 *
 * [1496] 判断路径是否相交
 */

// @lc code=start
// x, y
type Path = [number, number]
type PathString = 'N'|'S'|'E'|'W'
function isPathCrossing(path: string): boolean {
  let paths: Path[] = [[0, 0]]
  let current: Path = [0, 0]
  const go = (p: string): void => {
    switch (p) {
      case 'N':
        current[1] += 1
        break
      case 'S':
        current[1] -= 1
        break
      case 'E':
        current[0] += 1
        break
      case 'W':
        current[0] -= 1
        break
    }
  }
  let flag: boolean = false
  path.split('').forEach((p: string): void => {
    if (flag) return
    go(p)
    flag = paths.some(p1 => p1.every((item, i) => item === current[i]))
    paths.push(current.slice() as Path)
  })
  return flag
};
// @lc code=end

