/*
 * @lc app=leetcode.cn id=1848 lang=typescript
 * @lcpr version=21917
 *
 * [1848] 到目标元素的最小距离
 */

// @lc code=start
function getMinDistance(nums: number[], target: number, start: number): number {
  const list = nums.reduce((r, n, i) => {
    if (n === target) {
      r.push(Math.abs(i - start))
    }
    return r
  }, [] as number[])
  return list.sort((a, b) => a - b)[0]
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n5\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n0\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,1,1,1,1,1,1,1]\n1\n0\n
// @lcpr case=end

 */

