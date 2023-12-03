/*
 * @lc app=leetcode.cn id=141 lang=typescript
 * @lcpr version=21912
 *
 * [141] 环形链表
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

// function hasCycle(head: ListNode | null): boolean {
//   const map = new Set()
//   while (head?.next) {
//     if (map.has(head)) {
//       return true
//     }
//     map.add(head)
//     head = head.next
//   }
//   return false
// }
function hasCycle(head: ListNode | null): boolean {
  let slow = head
  let fast = head
  while (fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      return true
    }
  }
  return false
}
// @lc code=end

/*
// @lcpr case=start
// [3,2,0,-4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [1]\n-1\n
// @lcpr case=end

 */
