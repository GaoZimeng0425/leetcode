/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// let min = (h, h2) =>  Math.min(h, h2)
// var maxArea = function(height) {
//   let max = 0
//   for (let index = 0; index < height.length; index++) {
//     const h = height[index];
//     for (let i = index; i < height.length; i++) {
//       const h2 = height[i];
//       max = Math.max(max, min(h, h2) * (i - index))
//     }
//   }
//   return max
// };

var maxArea = function (height) {
  let leftIndex = 0
  let rightIndex = height.length - 1
  let area = 0
  while (leftIndex < rightIndex) {
    let l = height[leftIndex]
    let r = height[rightIndex]
    area = Math.max(area, Math.min(l, r) * (rightIndex - leftIndex))
    if (l > r) {
      --rightIndex
      // while (r > height[--rightIndex]) {
      //   r = height[rightIndex]
      // }
    } else {
      ++leftIndex
      // while (l > height[++leftIndex]) {
      //   l = height[leftIndex]
      // }
    }
  }
  return area
}
// @lc code=end

