/*
 * @lc app=leetcode.cn id=1448 lang=typescript
 * @lcpr version=21913
 *
 * [1448] 统计二叉树中好节点的数目
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

function goodNodes(root: TreeNode | null): number {
  let result = 0
  const dfs = (root: TreeNode | null, max: number) => {
    if (!root) return
    const { val, left, right } = root
    if (val >= max) result++
    const currentMax = Math.max(max, val)
    dfs(left, currentMax)
    dfs(right, currentMax)
  }
  dfs(root, root.val)
  return result
}
// @lc code=end

/*
// @lcpr case=start
// [3,1,4,3,null,1,5]\n
// @lcpr case=end

// @lcpr case=start
// [3,3,null,4,2]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
