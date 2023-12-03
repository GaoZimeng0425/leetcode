/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// function sortedArrayToBST(nums: number[]): TreeNode | null {
//   if (!nums.length) return null
//   if (nums.length === 1) return new TreeNode(nums[0])
//   const middle = Math.floor((nums.length - 1) / 2)
//   const root = new TreeNode(nums[middle])
//   root.left = sortedArrayToBST(nums.slice(0, middle))
//   root.right = sortedArrayToBST(nums.slice(middle + 1, nums.length))
//   return root
// };
function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) return null
  return helper(nums, 0, nums.length - 1)
};
function helper (nums: number[], l:number, r:number): TreeNode | null {
  if (r < l) return null
  const middle = Math.floor((r - l) / 2) + l
  const root = new TreeNode(nums[middle])
  root.left = helper(nums, l, middle - 1)
  root.right = helper(nums, middle + 1, r)
  return root
}
// @lc code=end

