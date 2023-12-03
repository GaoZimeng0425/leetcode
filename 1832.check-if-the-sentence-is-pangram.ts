/*
 * @lc app=leetcode.cn id=1832 lang=typescript
 * @lcpr version=21913
 *
 * [1832] 判断句子是否为全字母句
 */

// @lc code=start
function checkIfPangram(sentence: string): boolean {
  return new Set(sentence.split('')).size === 26
}
// @lc code=end

/*
// @lcpr case=start
// "thequickbrownfoxjumpsoverthelazydog"\n
// @lcpr case=end

// @lcpr case=start
// "leetcode"\n
// @lcpr case=end

 */
