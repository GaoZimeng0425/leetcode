/*
 * @Author: gaozimeng
 * @Date: 2021-04-18 14:01:09
 * @LastEditors: gaozimeng
 * @LastEditTime: 2021-05-07 12:04:46
 * @Description: Do not edit
 * @FilePath: /webpack/Users/gaozimeng/.leetcode/235.二叉搜索树的最近公共祖先.ts
 */
/*
 * @lc app=leetcode.cn id=235 lang=typescript
 *
 * [235] 二叉搜索树的最近公共祖先
 *
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
 *
 * algorithms
 * Easy (65.86%)
 * Likes:    571
 * Dislikes: 0
 * Total Accepted:    135.1K
 * Total Submissions: 203.9K
 * Testcase Example:  '[6,2,8,0,4,7,9,null,null,3,5]\n2\n8'
 *
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 * 
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x
 * 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 * 
 * 例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]
 * 
 * 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 * 输出: 6 
 * 解释: 节点 2 和节点 8 的最近公共祖先是 6。
 * 
 * 
 * 示例 2:
 * 
 * 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
 * 输出: 2
 * 解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 所有节点的值都是唯一的。
 * p、q 为不同节点且均存在于给定的二叉搜索树中。
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

// [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]\n2\n4
const dfs = (tree, min, max) => {
  if (tree === null) return null
  const { val, left, right } = tree
  let [minValue, maxValue] = [min.val, max.val]
  if (val < minValue) {
    return dfs(right, min, max)
  } else if (val > maxValue) {
    return dfs(left, min, max)
  } else {
    return tree
  }
}
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let max = p.val > q.val ? p : q
  let min = max === p ? q : p
  return dfs(root, min, max)
};
// @lc code=end

