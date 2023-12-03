/*
 * @lc app=leetcode.cn id=345 lang=typescript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
const cached = (fn: (arg: any) => boolean) => {
  const map = new Map()
  return (s: any) => {
    if (map.has(s)) return map.get(s)
    const value = fn(s)
    return map.set(s, value) && value
  }
}
const swap = (arr: any[], i: number, j: number) => ([arr[i], arr[j]] = [arr[j], arr[i]])

function reverseVowels(s: string): string {
  const stringList = s.split('')
  const isVowels = cached((s: string) => 'aeiouAEIOU'.includes(s))

  const { length } = s
  let [i, j] = [0, length - 1]

  while (i < j) {
    const [start, end] = [stringList[i], stringList[j]]
    const [isStartVowel, isEndVowel] = [isVowels(start), isVowels(end)]
    if (isStartVowel && isEndVowel) {
      swap(stringList, i, j)
      i++
      j--
    } else if (isStartVowel) {
      j--
    } else {
      i++
    }
  }
  return stringList.join('')
}
// @lc code=end
