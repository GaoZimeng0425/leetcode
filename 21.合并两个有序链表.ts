/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const prefix = new ListNode()
  let curr = prefix
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr = curr.next = l1
      l1 = l1.next
    } else {
      curr = curr.next = l2
      l2 = l2.next
    }
  }
  if (l1) curr.next = l1
  if (l2) curr.next = l2
  return prefix.next
}

// @lc code=end
