/*
 * @Author: gaozimeng
 * @Date: 2021-05-05 12:40:35
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-05 12:53:17
 * @Description: Do not edit
 * @FilePath: /ts-axios/Users/gaozimeng/.leetcode/144.二叉树的前序遍历.ts
 */
/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (68.42%)
 * Likes:    563
 * Dislikes: 0
 * Total Accepted:    310.9K
 * Total Submissions: 446.2K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,null,2,3]
 * 输出：[1,2,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1]
 * 输出：[1]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：root = [1,2]
 * 输出：[1,2]
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：root = [1,null,2]
 * 输出：[1,2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [0, 100] 内
 * -100 
 * 
 * 
 * 
 * 
 * 进阶：递归算法很简单，你可以通过迭代算法完成吗？
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

// const dfs = (tree, list = []) => {
//   if (tree === null) return list
//   list.push(tree.val)
//   dfs(tree.left, list)
//   dfs(tree.right, list)
//   return list
// }
function preorderTraversal(root: TreeNode | null): number[] {
  let stack = [root]
  let result = []
  let tree
  while ((tree = stack.pop())) {
    let { val, left, right } = tree
    result.push(val)
    right && stack.push(right)
    left && stack.push(left)
  }
  return result
};
// @lc code=end

