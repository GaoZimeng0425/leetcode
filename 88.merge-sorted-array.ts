/*
 * @lc app=leetcode.cn id=88 lang=typescript
 * @lcpr version=21913
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let [p1, p2, l] = [m - 1, n - 1, m + n - 1]
  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[l--] = nums1[p1--]
    } else {
      nums1[l--] = nums2[p2--]
    }
  }
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,0,0,0]\n3\n[2,5,6]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n[]\n0\n
// @lcpr case=end

// @lcpr case=start
// [0]\n0\n[1]\n1\n
// @lcpr case=end

 */
