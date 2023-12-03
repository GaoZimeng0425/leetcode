/*
 * @lc app=leetcode.cn id=剑指 Offer 50 lang=typescript
 * @lcpr version=30102
 *
 * [剑指 Offer 50] 第一个只出现一次的字符
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function dismantlingAction(arr: string): string {
  const set = new Set<string>()
  const set2 = new Set<string>()
  for (const char of arr) {
    if (set.has(char)) {
      set2.delete(char)
    } else {
      set.add(char)
      set2.add(char)
    }
  }
  return set2.values().next().value ?? ' '
}
// @lc code=end

/*
// @lcpr case=start
// "abbccdeff"\n
// @lcpr case=end

// @lcpr case=start
// "ccdd"\n
// @lcpr case=end

 */
