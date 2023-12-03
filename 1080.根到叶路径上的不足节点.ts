/*
 * @lc app=leetcode.cn id=1080 lang=typescript
 * @lcpr version=21908
 *
 * [1080] 根到叶路径上的不足节点
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

const isLeftNode = (tree: TreeNode) => tree.left === null && tree.right === null
function sufficientSubset(root: TreeNode | null, limit: number): TreeNode | null {
  const deleteTree = (tree: TreeNode | null, acc = 0) => {
    if (tree === null) return null
    acc += tree.val
    if (isLeftNode(tree)) return acc >= limit ? tree : null

    tree.left = deleteTree(tree.left, acc)
    tree.right = deleteTree(tree.right, acc)
    return isLeftNode(tree) ? null : tree
  }
  return deleteTree(root)
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,-3,-5,null,4,null]\n1\n
// @lcpr case=end

// @lcpr case=start
// [5,4,8,11,null,17,4,7,1,null,null,5,3]\n22\n
// @lcpr case=end

// @lcpr case=start
// [1,2,-3,-5,null,4,null]\n-1\n
// @lcpr case=end

 */
