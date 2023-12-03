/*
 * @lc app=leetcode.cn id=21 lang=typescript
 * @lcpr version=21913
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const result = new ListNode()
  let head = result
  while (list1 && list2) {
    if (list1.val < list2.val) {
      head = head.next = list1
      list1 = list1.next
    } else {
      head = head.next = list2
      list2 = list2.next
    }
  }
  if (list1) head.next = list1
  if (list2) head.next = list2
  return result.next
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,4]\n[1,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n[]\n
// @lcpr case=end

// @lcpr case=start
// []\n[0]\n
// @lcpr case=end

 */
