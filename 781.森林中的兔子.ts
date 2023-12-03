/*
 * @lc app=leetcode.cn id=781 lang=typescript
 * @lcpr version=21908
 *
 * [781] 森林中的兔子
 */

// @lc code=start
function numRabbits(answers: number[]): number {
  const set = new Set()
  return answers.reduce((result, item) => {
    if (item === 0) return result + 1
    if (set.has(item)) return result
    set.add(item)
    return result + item + 1
  }, 0)
}
// @lc code=end

/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,1,0,0]\n
// @lcpr case=end

// @lcpr case=start
// [10,10,10]\n
// @lcpr case=end

 */
