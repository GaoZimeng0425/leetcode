/*
 * @lc app=leetcode.cn id=833 lang=typescript
 * @lcpr version=21913
 *
 * [833] 字符串中的查找与替换
 */

// @lc code=start
function findReplaceString(
  s: string,
  indices: number[],
  sources: string[],
  targets: string[]
): string {
  const result = []
  for (let i = 0; i < indices.length; i++) {
    const [index, source, target] = [indices[i], sources[i], targets[i]]
    const current = s.slice(index, source.length + index)
    console.log('🚀 : current:', current)
    console.log('🚀 : source:', source)
    if (current === source) {
      result.push(target)
    } else {
      result.push(s.slice(index, source.length + index))
    }
  }
  return result.join('')
}
// @lc code=end

/*
// @lcpr case=start
// "abcd"\n[0,2]\n["a","cd"]\n["eee","ffff"]\n
// @lcpr case=end

// @lcpr case=start
// "abcd"\n[0,2]\n["ab","ec"]\n["eee","ffff"]\n
// @lcpr case=end

 */
