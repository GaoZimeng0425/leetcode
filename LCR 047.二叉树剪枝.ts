/*
 * @lc app=leetcode.cn id=LCR 047 lang=typescript
 * @lcpr version=30111
 *
 * [LCR 047] 二叉树剪枝
 */

// @lcpr-template-start

// @lcpr-template-end
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

const isLeafNode = (node: TreeNode) => {
  return node.left === null && node.right === null
}
function pruneTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null
  const _root = new TreeNode(0, root)

  const search = (tree: TreeNode) => {
    if (tree === null) return
    search(tree.left)
    search(tree.right)
    if (tree.left && isLeafNode(tree.left) && tree.left.val === 0) tree.left = null
    if (tree.right && isLeafNode(tree.right) && tree.right.val === 0) tree.right = null
  }
  search(_root)
  return _root.left
}
// @lc code=end

/*
// @lcpr case=start
// [0,null,0,0,0]\n
// @lcpr case=end
//
// @lcpr case=start
// [1,null,0,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,0,1,0,0,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,0,1,1,0,1,0]\n
// @lcpr case=end

 */
