/*
 * @lc app=leetcode.cn id=2138 lang=typescript
 * @lcpr version=21914
 *
 * [2138] 将字符串拆分为若干长度为 k 的组
 */

// @lc code=start
function divideString(s: string, k: number, fill: string): string[] {
  const list: string[] = []
  for (let index = 0; index < s.length; index += k) {
    let temp = s.slice(index, index + k)
    if (temp.length < k) {
      temp = temp.padEnd(k, fill)
    }
    list.push(temp)
  }
  return list
}
// @lc code=end

/*
// @lcpr case=start
// "abcdefghi"\n3\n"x"\n
// @lcpr case=end

// @lcpr case=start
// "abcdefghij"\n3\n"x"\n
// @lcpr case=end

 */
