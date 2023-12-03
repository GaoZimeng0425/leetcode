/*
 * @lc app=leetcode.cn id=799 lang=typescript
 *
 * [783] 二叉搜索树节点最小距离
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

function minDiffInBST(root: TreeNode | null): number {
  let min = Number.MIN_SAFE_INTEGER
  let prevNode = null
  const dfs = (tree: TreeNode | null) => {
    if (tree) return
    const { val, left, right } = tree
    dfs(left)
    if (prevNode !== null) {
      min = Math.min(min, val - prevNode.val)
    }
    prevNode = tree
    dfs(right)
  }
  root && dfs(root)
  return min
}
// @lc code=end
