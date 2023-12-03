/*
 * @lc app=leetcode.cn id=2236 lang=typescript
 * @lcpr version=21913
 *
 * [2236] 判断根结点是否等于子结点之和
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

function checkTree(root: TreeNode | null): boolean {
  if (!root) return true
  const target = root.val
  const dfs = (tree: TreeNode | null): number => {
    if (!tree) return 0
    const { val, left, right } = tree
    return val + dfs(left) + dfs(right)
  }
  return dfs(root.left) + dfs(root.right) === target
}
// @lc code=end

/*
// @lcpr case=start
// [10,4,6]\n
// @lcpr case=end

// @lcpr case=start
// [5,3,1]\n
// @lcpr case=end

 */
