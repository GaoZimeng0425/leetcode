/*
 * @lc app=leetcode.cn id=面试题 02.06 lang=typescript
 * @lcpr version=21914
 *
 * [面试题 02.06] 回文链表
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

function isPalindrome(head: ListNode | null): boolean {
  const list: number[] = []
  while (head) {
    list.push(head.val)
    head = head.next
  }
  let length = Math.floor(list.length / 2)
  for (let i = 0; i < length; i++) {
    const [start, end] = [list[i], list[list.length - 1 - i]]
    if (start !== end) return false
  }
  return true
}
// @lc code=end

/*
// @lcpr case=start
// 1->2\n
// @lcpr case=end

// @lcpr case=start
// 1->2->2->1\n
// @lcpr case=end

 */
