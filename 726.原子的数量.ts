const [start, end] = ['(', ')']
const isNumber = str => /\d/.test(str)
const sort = (a: string, b: string) => {
  for (let i = 0; i < a.length; i++) {
    if (!b[i]) return 1
    if (a[i] < b[i]) return -1
    if (a[i] > b[i]) return 1
  }
  return -1
}
function countOfAtoms(formula: string): string {
  let i = 0
  const calcu = (): number => {
    let r = ''
    for (let j = i; j < formula.length; j++) {
      if (isNumber(formula[i])) {
        r += formula[i]
        i++
      } else {
        break
      }
    }
    return r ? Number(r) : 1
  }
  const findName = (): string => {
    let r = ''
    for (let j = i; j < formula.length; j++) {
      if (/[a-z]/.test(formula[j])) {
        i++
        r += formula[j]
      } else {
        return r
      }
    }
    return r
  }
  const mult = (): Map<string, number> => {
    const stack = new Map()
    while (i < formula.length) {
      const ele = formula[i]
      i++
      if (ele === start) {
        const newMap = mult()
        const num = calcu()
        newMap.forEach((val, key) => stack.set(key, (stack.get(key) || 0) + val * num))
      } else if (ele === end) {
        return stack
      } else {
        let name = ele + findName()
        const num = calcu()
        stack.set(name, (stack.get(name) || 0) + num)
      }
    }
    return stack
  }
  const arr = []
  mult().forEach((val, key) => {
    const c = val === 1 ? '' : val
    arr.push(`${key}${c}`)
  })
  arr.sort(sort)
  return arr.join('')
}