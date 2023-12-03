/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const { floor } = Math
var findMedianSortedArrays = function(nums1, nums2) {
  let i = j = 0
  let list = []
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      list.push(nums1[i++])
    // } else if (nums1[i] > nums2[j]) {
    } else {
      list.push(nums2[j++])
      // list.push(nums1[i++], nums2[j++])
    }
  }
  if (i < nums1.length) {
    list.push(...nums1.splice(i))
  }
  if (j < nums2.length) {
    list.push(...nums2.splice(j))
  }
  let middle = Math.floor(list.length / 2)
  return list.length % 2 === 1
    ? list[middle]
    : (list[middle] + list[middle - 1]) / 2
};
// @lc code=end

