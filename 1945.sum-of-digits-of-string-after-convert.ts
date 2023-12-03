/*
 * @lc app=leetcode.cn id=1945 lang=typescript
 * @lcpr version=21917
 *
 * [1945] 字符串转化后的各位数字之和
 */

// @lc code=start
const chat2num = (s: string): number => s.charCodeAt(0) - 96

function getLucky(s: string, k: number): number {
  let str = s.split('').map(chat2num).join('')

  for (let index = 0; index < k; index++) {
    let count = 0
    for (const char of str) {
      count += parseInt(char, 10)
    }
    str = count.toString()
  }
  return parseInt(str, 10)
}
// @lc code=end

/*
// @lcpr case=start
// "iiii"\n1\n
// @lcpr case=end

// @lcpr case=start
// "leetcode"\n2\n
// @lcpr case=end

 */
