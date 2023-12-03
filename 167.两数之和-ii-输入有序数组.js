/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let map = {}
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (map[num]) {
      return [map[num], i + 1]
    } else {
      map[target - num] = i + 1
    }
  }
};
// @lc code=end

