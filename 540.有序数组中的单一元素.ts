/*
 * @lc app=leetcode.cn id=540 lang=typescript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
function singleNonDuplicate(nums: number[]): number {
  let [l, h] = [0, nums.length - 1]
  while (l < h) {
    let mid = Math.floor((h - l) / 2) + l
    let flag
    if (mid % 2 === 0) {
      flag = nums[mid] === nums[mid - 1]
    } else {
      flag = nums[mid] === nums[mid + 1]
    }
    if (flag) {
      l = mid + 1
    } else {
      h = mid
    }
  }
  return l
};
// @lc code=end

