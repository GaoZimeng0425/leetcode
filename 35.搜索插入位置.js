/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let start = 0
  let end = nums.length - 1
  let ans = end + 1
  while (end >= start) {
    let mid = ((end - start) >> 1) + start;
    if (target <= nums[mid]) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
    return ans;
};
// @lc code=end

