/*
 * @lc app=leetcode.cn id=260 lang=typescript
 * @lcpr version=30102
 *
 * [260] 只出现一次的数字 III
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function singleNumber(nums: number[]): number[] {
  let set: Set<number> = new Set()
  for (const n of nums) {
    if (set.has(n)) {
      set.delete(n)
    } else {
      set.add(n)
    }
  }
  return [...set]
}

// @lc code=end

/*
// @lcpr case=start
// [1,2,1,3,2,5]\n
// @lcpr case=end

// @lcpr case=start
// [-1,0]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

 */
