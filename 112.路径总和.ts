/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
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

const traverse = (node: TreeNode | null, sum: number, result: number = 0): boolean => {
  if (node === null) return false
  const val: number = result + node.val
  if (val === sum && !node.left && !node.right) return true
  return traverse(node.left, sum, val) || traverse(node.right, sum, val)
}
function hasPathSum(root: TreeNode | null, sum: number): boolean {
  return traverse(root, sum)
};
// @lc code=end

