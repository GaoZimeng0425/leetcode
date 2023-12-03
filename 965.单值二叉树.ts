/*
 * @Author: gaozimeng
 * @Date: 2021-05-25 11:50:16
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-25 11:53:39
 * @Description: Do not edit
 * @FilePath: /undefined/Users/gaozimeng/.leetcode/965.单值二叉树.ts
 */
/*
 * @lc app=leetcode.cn id=965 lang=typescript
 *
 * [965] 单值二叉树
 *
 * https://leetcode-cn.com/problems/univalued-binary-tree/description/
 *
 * algorithms
 * Easy (68.19%)
 * Likes:    77
 * Dislikes: 0
 * Total Accepted:    28.8K
 * Total Submissions: 42K
 * Testcase Example:  '[1,1,1,1,1,null,1]'
 *
 * 如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。
 * 
 * 只有给定的树是单值二叉树时，才返回 true；否则返回 false。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 输入：[1,1,1,1,1,null,1]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 输入：[2,2,2,5,2]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 给定树的节点数范围是 [1, 100]。
 * 每个节点的值都是整数，范围为 [0, 99] 。
 * 
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
const dfs = (node, target): boolean => {
  if (node === null) return true
  const { val, left, right } = node
  if (val !== target) return false
  return dfs(left, target) && dfs(right, target)
}
function isUnivalTree(root: TreeNode | null): boolean {
  return dfs(root, root.val)
};
// @lc code=end

