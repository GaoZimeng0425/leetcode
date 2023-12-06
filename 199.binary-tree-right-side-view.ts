/*
 * @lc app=leetcode.cn id=199 lang=typescript
 * @lcpr version=30111
 *
 * [199] 二叉树的右视图
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

function rightSideView(root: TreeNode | null): number[] {
  if (!root) return []
  const result: number[] = []
  let layer: TreeNode[] = [root]
  while (layer.length) {
    const nextLayer: TreeNode[] = []
    result.push(layer.at(-1)!.val)
    layer.forEach((node) => {
      if (node.left) nextLayer.push(node.left)
      if (node.right) nextLayer.push(node.right)
    })
    layer = nextLayer
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,null,5,null,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
