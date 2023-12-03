/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
  Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let ans1 = m - 1
  let ans2 = n - 1
  let l = (m + n) - 1
  while (ans2 >= 0) {
    let n1 = nums1[ans1]
    let n2 = nums2[ans2]
    if (n1 > n2) {
      nums1[l] = n1
      ans1--
    } else {
      nums1[l] = n2
      ans2--
    }
    l--
  }
};
// @lc code=end

