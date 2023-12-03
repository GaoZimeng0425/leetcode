/*
 * @lc app=leetcode.cn id=1816 lang=typescript
 * @lcpr version=21913
 *
 * [1816] 截断句子
 */

// @lc code=start
function truncateSentence(s: string, k: number): string {
  return s.split(' ').slice(0, k).join(' ')
}
// @lc code=end

/*
// @lcpr case=start
// "Hello how are you Contestant"\n4\n
// @lcpr case=end

// @lcpr case=start
// "What is the solution to this problem"\n4\n
// @lcpr case=end

// @lcpr case=start
// "chopper is not a tanuki"\n5\n
// @lcpr case=end

 */
