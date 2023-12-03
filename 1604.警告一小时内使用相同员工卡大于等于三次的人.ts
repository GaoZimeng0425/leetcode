/*
 * @lc app=leetcode.cn id=1604 lang=typescript
 *
 * [1604] 警告一小时内使用相同员工卡大于等于三次的人
 */

// @lc code=start

const trans = (str: string): number => {
  const [h, m] = str.split(':')
  console.log((~~h * 60) + ~~m)
  return (~~h * 60) + ~~m
}

const diff = (o, n) => {
  o = trans(o)
  n = trans(n)
  return n - o <= 60 && n - o >= 0
}

function alertNames(keyName: string[], keyTime: string[]): string[] {
  const result: string[] = []
  let lastKeyName = keyName[0]
  let lastKeyTime = keyTime[0]
  let times = 0
  keyName.forEach((name, i) => {
    const curTime = keyTime[i]
    if (name !== lastKeyName) {
      times = 0
      lastKeyName = name
      lastKeyTime = curTime
    }
    if (!diff(lastKeyTime, curTime)) {
      times = 0
      lastKeyTime = curTime
    } else {
      times++
      if (times >=3) {
        result.push(name)
      }
    }
  })
  return result
}
// @lc code=end
