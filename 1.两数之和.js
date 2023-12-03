/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 暴力法
// var twoSum = function(nums, target) {
//   for (let index = 0; index < nums.length; index++) {
//     const a = nums[index];
//     for (let i = index + 1; i < nums.length; i++) {
//       const b = nums[i];
//       if (a + b === target) return [index, i]
//     }
//   }
// };

// 两遍哈希表
// var twoSum = function (nums, target) {
//   let map = {}
//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     map[target - element] = index
//   }
//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     let a = map[element]
//     if (a != null && a !== index) return [index, map[element]]
//   }
// }

// 一遍哈希表
// var twoSum = function (nums, target) {
//   let map = {}
//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index]
//     const a = map[element]
//     if (a != null) {
//       return [a, index]
//     } else {
//       map[target - element] = index
//     }
//   }
// }

// 双指针
var twoSum = function (nums, target) {
  let list = nums.slice().sort((a, b) => a - b)
  let i = 0
  let j = nums.length - 1
  while (i < j) {
    let count = list[i] + list[j]
    if (count > target) {
      j--
    } else if (count < target) {
      i++
    } else {
      i = list[i]
      j = list[j]
      let k = nums.indexOf(i)
      let f = i !== j ? 0 : k + 1
      let p = nums.indexOf(j, f)
      return [k, p]
    }
  }
}

// @lc code=end