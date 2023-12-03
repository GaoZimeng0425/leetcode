/*
 * @lc app=leetcode.cn id=2129 lang=typescript
 * @lcpr version=21913
 *
 * [2129] 将标题首字母大写
 */

// @lc code=start
const toCamelCase = (word: string) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
function capitalizeTitle(title: string): string {
  return title
    .split(' ')
    .map((word) => (word.length < 3 ? word.toLowerCase() : toCamelCase(word)))
    .join(' ')
}
// @lc code=end

/*
// @lcpr case=start
// "capiTalIze tHe titLe"\n
// @lcpr case=end

// @lcpr case=start
// "First leTTeR of EACH Word"\n
// @lcpr case=end

// @lcpr case=start
// "i lOve leetcode"\n
// @lcpr case=end

 */
