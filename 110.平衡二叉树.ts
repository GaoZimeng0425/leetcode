/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

// const depth = (root: TreeNode | null): number => {
//   if (!root) return 0
//   return Math.max(depth(root.left), depth(root.right)) + 1
// }
// function isBalanced(root: TreeNode | null): boolean {
//   if (!root) return true
//   return Math.abs(depth(root.left) - depth(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right)
// };

type c = {depth: number, balance: boolean}
const depth = (root: TreeNode | null): c => {
  if (!root) return {depth: 0, balance: true}
  let l = depth(root.left)
  if (!l.balance) {
    return { balance: false, depth: l.depth}
  }
  let r = depth(root.right)
  if (!r.balance) {
    return { balance: false, depth: r.depth}
  }
  let balance = Math.abs(l.depth - r.depth) < 2
  if (!balance) return { balance: false, depth: 0}
  return {balance: true, depth: Math.max(l.depth, r.depth) + 1}
}
function isBalanced (root: TreeNode | null): boolean {
  return depth(root).balance
}
// @lc code=end

