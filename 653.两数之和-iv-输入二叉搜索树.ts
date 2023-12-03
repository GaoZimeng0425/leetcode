/*
 * @lc app=leetcode.cn id=653 lang=typescript
 *
 * [653] 两数之和 IV - 输入二叉搜索树
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

// const equal = (list: number[], target: number): boolean => {
//   for (let i = 0; i < list.length; i++) {
//     const current = list[i]
//     for (let j = i + 1; j < list.length; j++) {
//       const next = list[j]
//       if (current + next === target) return true
//     }
//   }
//   return false
// }

// const reduceNumber = (tree: TreeNode): number[] => {
//   if (!tree) return []
//   const left = reduceNumber(tree.left)
//   const right = reduceNumber(tree.right)
//   return [tree.val, ...left, ...right]
// }
// function findTarget(root: TreeNode | null, k: number): boolean {
//   const list: number[] = reduceNumber(root)
//   return equal(list, k)
// }
function findTarget(root: TreeNode | null, k: number): boolean {
  const set: Set<number> = new Set()
  const treeList: TreeNode[] = [root]
  while (treeList.length) {
    const currentNode = treeList.pop()
    if (set.has(currentNode.val)) return true
    set.add(k - currentNode.val)
    currentNode.left && treeList.push(currentNode.left)
    currentNode.right && treeList.push(currentNode.right)
  }
  return false
}
// @lc code=end
