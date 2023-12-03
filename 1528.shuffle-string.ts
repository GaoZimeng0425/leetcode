/*
 * @lc app=leetcode.cn id=1528 lang=typescript
 * @lcpr version=21917
 *
 * [1528] 重新排列字符串
 */

// @lc code=start
function restoreString(s: string, indices: number[]): string {
  return indices.reduce((result, index, i) => {
    result[index] = s[i]
    return result
  }, [] as String[])
  .join('')
};
// @lc code=end



/*
// @lcpr case=start
// "codeleet"\n[4,5,6,7,0,2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// "abc"\n[0,1,2]\n
// @lcpr case=end

 */

