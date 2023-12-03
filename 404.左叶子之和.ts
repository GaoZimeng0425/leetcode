/*
 * @lc app=leetcode.cn id=404 lang=typescript
 *
 * [404] 左叶子之和
 *
 * https://leetcode-cn.com/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (56.25%)
 * Likes:    304
 * Dislikes: 0
 * Total Accepted:    76.9K
 * Total Submissions: 134.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 计算给定二叉树的所有左叶子之和。
 * 
 * 示例：
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 * 
 * 
 * 
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

const isLeafNode = (node: TreeNode) => !(node.left || node.right)
function sumOfLeftLeaves(root: TreeNode | null): number {
  let result: number = 0
  const calculate = (tree: TreeNode | null) => {
    if (tree === null) return
    if (tree.left && isLeafNode(tree.left)) result += tree.left.val
    calculate(tree.left)
    calculate(tree.right)
  }
  calculate(root)
  return result
};
// @lc code=end

