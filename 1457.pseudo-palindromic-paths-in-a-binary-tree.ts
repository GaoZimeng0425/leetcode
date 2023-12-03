/*
 * @lc app=leetcode.cn id=1457 lang=typescript
 * @lcpr version=30110
 *
 * [1457] 二叉树中的伪回文路径
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

const isPseudo = (s: string): boolean => {
  const stack = new Set<string>()
  for (const char of s) {
    if (stack.has(char)) {
      stack.delete(char)
    } else {
      stack.add(char)
    }
  }
  return stack.size <= 1
}
function pseudoPalindromicPaths(root: TreeNode | null): number {
  const dsf = (node: TreeNode | null, path: string): string[] => {
    if (!node) return []
    path += node.val
    return [...dsf(node.left, path), ...dsf(node.right, path)]
  }
  const paths = dsf(root, '')
  return paths.filter(isPseudo).length
}
// @lc code=end

/*
// @lcpr case=start
// [2,3,1,3,1,null,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,1,1,3,null,null,null,null,null,1]\n
// @lcpr case=end

// @lcpr case=start
// [9]\n
// @lcpr case=end

 */
