/*
 * @lc app=leetcode.cn id=1305 lang=typescript
 * @lcpr version=21908
 *
 * [1305] 两棵二叉搜索树中的所有元素
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
const tree2List = (root: TreeNode): number[] => {
  if (!root) return []
  const { left, right, val } = root
  return [...tree2List(left), val, ...tree2List(right)]
}
function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
  return [...tree2List(root1), ...tree2List(root2)].sort((a, b) => a - b)
}
// @lc code=end

/*
// @lcpr case=start
// [2,1,4]\n[1,0,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,8]\n[8,1]\n
// @lcpr case=end

 */
