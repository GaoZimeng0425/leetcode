/*
 * @lc app=leetcode.cn id=496 lang=typescript
 *
 * [496] 下一个更大元素 I
 *
 * https://leetcode-cn.com/problems/next-greater-element-i/description/
 *
 * algorithms
 * Easy (65.94%)
 * Likes:    409
 * Dislikes: 0
 * Total Accepted:    75.5K
 * Total Submissions: 111.6K
 * Testcase Example:  '[4,1,2]\n[1,3,4,2]'
 *
 * 给你两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。
 * 
 * 请你找出 nums1 中每个元素在 nums2 中的下一个比其大的值。
 * 
 * nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
 * 输出: [-1,3,-1]
 * 解释:
 * ⁠   对于 num1 中的数字 4 ，你无法在第二个数组中找到下一个更大的数字，因此输出 -1 。
 * ⁠   对于 num1 中的数字 1 ，第二个数组中数字1右边的下一个较大数字是 3 。
 * ⁠   对于 num1 中的数字 2 ，第二个数组中没有下一个更大的数字，因此输出 -1 。
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums1 = [2,4], nums2 = [1,2,3,4].
 * 输出: [3,-1]
 * 解释:
 * 对于 num1 中的数字 2 ，第二个数组中的下一个较大数字是 3 。
 * ⁠   对于 num1 中的数字 4 ，第二个数组中没有下一个更大的数字，因此输出 -1 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * nums1和nums2中所有整数 互不相同
 * nums1 中的所有整数同样出现在 nums2 中
 * 
 * 
 * 
 * 
 * 进阶：你可以设计一个时间复杂度为 O(nums1.length + nums2.length) 的解决方案吗？
 * 
 */

// @lc code=start
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const result: number[] = []
  const stack: number[] = []
  const map: Map<number, number> = new Map()
  nums2.forEach(n => {
    while (stack.length && stack[stack.length - 1] < n) {
      map.set(stack.pop(), n)
    }
    stack.push(n)
  })

  nums1.forEach(n => {
    const count = map.get(n)
    result.push(count || -1)
  })
  return result
}
// function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
//   const result: number[] = []
//   for (let i = 0; i < nums1.length; i++) {
//     const n = nums1[i]
//     let temp = -1
//     for (let j = 0; j < nums2.length; j++) {
//       const m = nums2[j]
//       if (n === m) {
//         for (let x = j + 1; x < nums2.length; x++) {
//           const next = nums2[x]
//           if (next > m) {
//             temp = next
//             break
//           }
//         }
//         break
//       }
//     }
//     result.push(temp)
//   }
//   return result
// };
// @lc code=end

