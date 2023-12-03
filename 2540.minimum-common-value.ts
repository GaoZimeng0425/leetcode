/*
 * @lc app=leetcode.cn id=2540 lang=typescript
 * @lcpr version=21917
 *
 * [2540] 最小公共值
 */

// @lc code=start
function getCommon(nums1: number[], nums2: number[]): number {
  let [i, j] = [0, 0]
  while (i < nums1.length && j < nums2.length) {
    let [l, r] = [nums1[i], nums2[j]]
    if (l === r) return l
    if (l > r) j++
    if (l < r) i++
  }
  return -1
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n[2,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,6]\n[2,3,4,5]\n
// @lcpr case=end

 */
