/*
 * @lc app=leetcode.cn id=107 lang=typescript
 *
 * [107] 二叉树的层次遍历 II
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

function levelOrderBottom(root: TreeNode | null): number[][] {
  if (!root) return []
  let result: number[][]= []
  let stack = [root]
  while (stack[0]) {
    let temp: TreeNode[] = []
    let s:number[] = []
    stack.forEach(r => {
      if (r.val != null) {
        s.push(r.val)
      }
      if (r.left) {
        temp.push(r.left)
      }
      if (r.right) {
        temp.push(r.right)
      }
    })
    if (s.length) {
      result.unshift(s)
    }
    stack = temp
  }
  return result
};
// @lc code=end

