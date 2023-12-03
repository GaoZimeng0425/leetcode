/*
 * @lc app=leetcode.cn id=2670 lang=typescript
 * @lcpr version=30102
 *
 * [2670] 找出不同元素数目差数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function distinctDifferenceArray(nums: number[]): number[] {
  const postfix = new Map<number, number>()
  const prefix = new Map<number, number>()
  const list: number[] = []
  for (const num of nums) {
    postfix.set(num, (postfix.get(num) || 0) + 1)
  }
  for (const num of nums) {
    if (postfix.get(num) === 1) {
      postfix.delete(num)
    } else {
      postfix.set(num, postfix.get(num)! - 1)
    }
    prefix.set(num, (prefix.get(num) || 0) + 1)
    list.push(prefix.size - postfix.size)
  }
  return list
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,3,4,2]\n
// @lcpr case=end

 */
