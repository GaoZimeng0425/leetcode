/*
 * @lc app=leetcode.cn id=1385 lang=typescript
 * @lcpr version=21917
 *
 * [1385] 两个数组间的距离值
 */

// @lc code=start
function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
  let result = 0
  for (let i = 0; i < arr1.length; i++) {
    const cur = arr1[i]
    if (arr2.every((n) => Math.abs(cur - n) > d)) result++
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// [4,5,8]\n[10,9,1,8]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,4,2,3]\n[-4,-3,6,10,20,30]\n3\n
// @lcpr case=end

// @lcpr case=start
// [2,1,100,3]\n[-5,-2,10,-3,7]\n6\n
// @lcpr case=end

 */
