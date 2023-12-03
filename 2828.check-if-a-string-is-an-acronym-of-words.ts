/*
 * @lc app=leetcode.cn id=2828 lang=typescript
 * @lcpr version=21917
 *
 * [2828] 判别首字母缩略词
 */

// @lc code=start
function isAcronym(words: string[], s: string): boolean {
  if (words.length !== s.length) return false;
  // for (let i = 0; i < words.length; i++) {
  //   if (words[i][0] !== s[i]) return false
  // }
  // return words.every((word, i) => word.at(0) === s.at(i))
  return words.map(w => w[0]).join('') === s
};
// @lc code=end



/*
// @lcpr case=start
// ["alice","bob","charlie"]\n"abc"\n
// @lcpr case=end

// @lcpr case=start
// ["an","apple"]\n"a"\n
// @lcpr case=end

// @lcpr case=start
// ["never","gonna","give","up","on","you"]\n"ngguoy"\n
// @lcpr case=end

 */

