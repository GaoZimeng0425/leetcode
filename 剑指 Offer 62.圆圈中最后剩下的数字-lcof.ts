/*
 * @lc app=leetcode.cn id=剑指 Offer 62 lang=typescript
 * @lcpr version=30102
 *
 * [剑指 Offer 62] 圆圈中最后剩下的数字
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function iceBreakingGame(num: number, target: number): number {
  const list = [...Array(num).keys()]
  console.log(list)
  while (list.length > 1) {
    console.log(list.length)
    console.log(list.length % target)
    list.splice(list.length % target, 1)
    console.log(list)
  }
  return list[0]
}
// @lc code=end
iceBreakingGame(7, 4)

/*
// @lcpr case=start
// 7\n4\n
// @lcpr case=end

// @lcpr case=start
// 12\n5\n
// @lcpr case=end

 */
