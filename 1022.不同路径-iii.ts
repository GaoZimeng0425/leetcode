/*
 * @lc app=leetcode.cn id=1079 lang=typescript
 *
 * [1022] 从根到叶的二进制数之和
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

const binary2Number = (str: string) => parseInt(str, 2)

function sumRootToLeaf(root: NewType | null): number {
  let result = 0
  const dfs = (tree: TreeNode, path: string = '') => {
    const { val, left, right } = tree
    const currentPath = `${path}${val}`
    left && dfs(left, currentPath)
    right && dfs(right, currentPath)
    if (!left && !right) {
      result += binary2Number(currentPath)
    }
  }
  root && dfs(root)
  return result
}
// @lc code=end
