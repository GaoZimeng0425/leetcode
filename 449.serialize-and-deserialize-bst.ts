/*
 * @lc app=leetcode.cn id=449 lang=typescript
 * @lcpr version=21913
 *
 * [449] 序列化和反序列化二叉搜索树
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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (!root) return ''
  const { left, right, val } = root
  return `${serialize(left)},${val},${serialize(right)}`
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (data === '') return null
  const list = data.split(',')
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

/*
// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
