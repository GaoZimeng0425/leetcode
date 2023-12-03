/*
 * @lc app=leetcode.cn id=1333 lang=typescript
 * @lcpr version=21917
 *
 * [1333] 餐厅过滤器
 */

// @lc code=start
function filterRestaurants(
  restaurants: number[][],
  veganFriendly: number,
  maxPrice: number,
  maxDistance: number
): number[] {
  return restaurants
    .filter(([, , vegan, price, distance]) => {
      return veganFriendly <= vegan && price <= maxPrice && distance <= maxDistance
    })
    .sort((a, b) => b[1] - a[1] || b[0] - a[0])
    .map(([id]) => id)
}
// @lc code=end

/*
// @lcpr case=start
// [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]]\n1\n50\n10\n
// @lcpr case=end

// @lcpr case=start
// [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]]\n0\n50\n10\n
// @lcpr case=end

// @lcpr case=start
// [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]]\n0\n30\n3\n
// @lcpr case=end

 */
