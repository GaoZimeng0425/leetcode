/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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


function reverseList(head: ListNode | null): ListNode | null {
  let [prev, node] = [null, head]
  while (node) {
    let temp = node.next
    node.next = prev
    prev = node
    node = temp
  }
  return prev
};
// @lc code=end

