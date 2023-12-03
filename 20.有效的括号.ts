/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const map: Map<string,string> = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])
  const stack: Array<string> = []
  let pos: number = 0
  let cur: string
  while (pos < s.length) {
    cur = s[pos]
    if (map.has(cur)) {
      let s = stack.pop()
      if (map.get(cur) !== s) {
        return false
      }
    } else {
      stack.push(cur)
    }
    pos++
  }
  return stack.length === 0
};
// @lc code=end

