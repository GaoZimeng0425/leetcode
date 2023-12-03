/*
 * @lc app=leetcode.cn id=1431 lang=typescript
 * @lcpr version=21917
 *
 * [1431] 拥有最多糖果的孩子
 */

// @lc code=start
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies)
  return candies.map((candy) => candy + extraCandies >= max)
}
// @lc code=end

/*
// @lcpr case=start
// [2,3,5,1,3]\n3\n
// @lcpr case=end

// @lcpr case=start
// [4,2,1,1,2]\n1\n
// @lcpr case=end

// @lcpr case=start
// [12,1,12]\n10\n
// @lcpr case=end

 */
