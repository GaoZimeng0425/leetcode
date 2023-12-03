/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (40.50%)
 * Likes:    1322
 * Dislikes: 0
 * Total Accepted:    369.4K
 * Total Submissions: 887.6K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 
 * 进阶：你能尝试使用一趟扫描实现吗？
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1], n = 1
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中结点的数目为 sz
 * 1 
 * 0 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

const calculateLength = (head: ListNode) => {
  let length = 1
  while (head.next) {
    head = head.next
    length++
  }
  return length
}
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) return head
  const length = calculateLength(head)
  let c = length - n
  let t = new ListNode(0, head)
  let tree = t
  while (tree) {
    if (c-- === 0) {
      if (!tree.next.next) tree.next = new ListNode()
      tree.next.val = tree.next.next?.val
      tree.next = tree.next.next
      break
    }
    tree = tree.next
  }
  return t.next
};
// @lc code=end

