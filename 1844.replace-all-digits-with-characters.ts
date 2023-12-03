/*
 * @lc app=leetcode.cn id=1844 lang=typescript
 * @lcpr version=21917
 *
 * [1844] 将所有数字用字符替换
 */

// @lc code=start
const replace = (s: string, offset: number) => String.fromCodePoint(s.codePointAt(0)! + offset)

function replaceDigits(s: string): string {
  const result: string[] = []
  for (let i = 0; i < s.length; i += 2) {
    const [char, int] = [s[i], parseInt(s[i + 1])]
    if (isNaN(int)) {
      result.push(char)
    } else {
      result.push(char, replace(char, int))
    }
  }
  return result.join('')
}

// @lc code=end

/*
// @lcpr case=start
// "a1c1e1"\n
// @lcpr case=end

// @lcpr case=start
// "a1b2c3d4e"\n
// @lcpr case=end

 */
