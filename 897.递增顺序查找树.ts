/*
 * @lc app=leetcode.cn id=897 lang=typescript
 *
 * [897] 递增顺序查找树
 *
 * https://leetcode-cn.com/problems/increasing-order-search-tree/description/
 *
 * algorithms
 * Easy (73.31%)
 * Likes:    170
 * Dislikes: 0
 * Total Accepted:    34.3K
 * Total Submissions: 46.3K
 * Testcase Example:  '[5,3,6,2,4,null,8,1,null,null,null,7,9]'
 *
 * 给你一棵二叉搜索树，请你 按中序遍历
 * 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
 * 输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [5,1,7]
 * 输出：[1,null,5,null,7]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数的取值范围是 [1, 100]
 * 0 
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

function increasingBST(root: TreeNode | null): TreeNode | null {
  const result: TreeNode = new TreeNode()
  let current = result
  const find = (tree: TreeNode | null) => {
    if (tree === null) return
    find(tree.left)
    current.right = new TreeNode(tree.val)
    current = current.right
    find(tree.right)
  }
  find(root)
  return result.right
};
// @lc code=end

