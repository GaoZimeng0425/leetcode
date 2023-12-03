/*
 * @lc app=leetcode.cn id=2194 lang=typescript
 * @lcpr version=21917
 *
 * [2194] Excel 表中某个范围内的单元格
 */

// @lc code=start
function cellsInRange(s: string): string[] {
  const [start, end] = [parseInt(s[1]), parseInt(s[4])]
  const startCode = s[0].codePointAt(0)!
  const endCode = s[3].codePointAt(0)!

  const list: string[] = []
  Array.from({ length: endCode - startCode + 1 }, (_, i) => {
    for (let j = start; j <= end; j++) {
      list.push(String.fromCodePoint(startCode + i) + j)
    }
  })
  return list
}
// @lc code=end
/*
// @lcpr case=start
// "U7:X9"\n
// @lcpr case=end

// @lcpr case=start
// "A1:F1"\n
// @lcpr case=end

 */
