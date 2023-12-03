/*
 * @lc app=leetcode.cn id=2299 lang=typescript
 * @lcpr version=21913
 *
 * [2299] 强密码检验器 II
 */

// @lc code=start
type Fn = (password: string) => boolean
function strongPasswordCheckerII(password: string): boolean {
  const test: Fn[] = [
    (str: string): boolean => str.length >= 8,
    (str: string): boolean => /[a-z]/.test(str),
    (str: string): boolean => /[A-Z]/.test(str),
    (str: string): boolean => /\d/.test(str),
    // (str: string): boolean => /!|@|#|\$|%|\^|&|\*|\(|\)|-|\+/.test(str),
    (str: string): boolean => '!@#$%^&*()-+'.split('').some((s) => str.includes(s)),
    (str: string): boolean => {
      for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) return false
      }
      return true
    }
  ]

  return test.every((fn) => fn(password))
}
// @lc code=end

/*
// @lcpr case=start
// "IloveLe3tcode!"\n
// @lcpr case=end

// @lcpr case=start
// "Me+You--IsMyDream"\n
// @lcpr case=end

// @lcpr case=start
// "1aB!"\n
// @lcpr case=end

 */
