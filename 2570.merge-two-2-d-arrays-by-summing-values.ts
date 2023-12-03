/*
 * @lc app=leetcode.cn id=2570 lang=typescript
 * @lcpr version=21917
 *
 * [2570] 合并两个二维数组 - 求和法
 */

// @lc code=start
function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  let [v1, v2] = [0, 0]
  const list: number[][] = []
  while (v1 < nums1.length && v2 < nums2.length) {
    if (nums1[v1][0] < nums2[v2][0]) {
      list.push(nums1[v1++])
    } else if (nums1[v1][0] > nums2[v2][0]) {
      list.push(nums2[v2++])
    } else {
      list.push([nums1[v1][0], nums1[v1++][1] + nums2[v2++][1]])
    }
  }
  if (v1 < nums1.length) list.push(...nums1.slice(v1))
  if (v2 < nums2.length) list.push(...nums2.slice(v2))
  return list
}
// @lc code=end

/*
// @lcpr case=start
// [[1,2],[2,3],[4,5]]\n[[1,4],[3,2],[4,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[2,4],[3,6],[5,5]]\n[[1,3],[4,3]]\n
// @lcpr case=end

 */
