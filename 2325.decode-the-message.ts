/*
 * @lc app=leetcode.cn id=2325 lang=typescript
 * @lcpr version=21917
 *
 * [2325] 解密消息
 */

// @lc code=start
function decodeMessage(key: string, message: string): string {
  const keyMap = new Map<string, string>()
  let i = 97
  for (const char of key) {
    if (char === ' ') continue
    if (!keyMap.has(char)) {
      keyMap.set(char, String.fromCharCode(i++))
    }
  }
  let result = ''
  for (const char of message) {
    result += keyMap.get(char) || char
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// "the quick brown fox jumps over the lazy dog"\n"vkbs bs t suepuv"\n
// @lcpr case=end

// @lcpr case=start
// "eljuxhpwnyrdgtqkviszcfmabo"\n"zwx hnfx lqantp mnoeius ycgk vcnjrdb"\n
// @lcpr case=end

 */
